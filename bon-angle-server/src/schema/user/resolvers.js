import Expo from "expo-server-sdk";
import users from '~/data/users'
let expo = new Expo;

const resolvers = {
    Query: {
        users: async (obj, args, ctx, info) => {
            return users
        },
        user: async (obj, args, ctx, info) => {
            return users.find((user) => user.id === args.id)
        },
        search: async (obj, args, ctx, info) => {
            const {foo} = args
            return users.filter(({firstName, lastName, city}) => {
                const Person = [firstName, lastName, city].join(' ');
                return Person.toLowerCase().indexOf(foo.toLowerCase()) > -1;
            })
        }
    }, 

    Mutation: {
        createUser: (obj, {fistName, lastName, city}, {db}, info)=>{
            db.user.create({
                firstName: fistName,
                lastName: lastName,
                city: city
            })
        },
        editUser: (obj, args, ctx, info) => {
            const { data } = args
            const index = users.indexOf((user)=> user.id === args.id);
            users[index] = {
                ...users[index],
                fistName: data.firstName || users[index].firstName,
                lastName: data.lastName || users[index].lastName,
                city: data.city || users[index].city
            }
            return users.find((user) => user.id === args.id)
        },

        storeUserExpoToken: (obj, args, ctx, info) => {
            const { token } = args;
            console.log('Got Token!', token);
            return { success: true };
        },

        sendNotification: async (obj, args, ctx, info) => {
            const {token} = args;
            console.log('Sending notification!', token);
            if (!Expo.isExpoPushToken(token)) throw Error('Not a valid Expo Token.')
            const message = {
                to: token,
                sound: 'default',
                body: 'This is a test notification',
                data: { conversationId: '1-upodjpiodjpiqwjdwqjd'},
            }
            let chunks = expo.chunkPushNotifications([message]);
            let success = false
            for (let chunk of chunks){
                try{
                    await expo.sendPushNotificationsAsync(chunk);
                    success = true;
                } catch(error) {
                    console.error(error);
                }
            }
            return { success }
        }, 

        deleteUser: (obj, {id}, {db}, info) =>{
            db.user.destroy({
                where:{
                    id: id
                }
            })
        }
    }
}

export default resolvers;