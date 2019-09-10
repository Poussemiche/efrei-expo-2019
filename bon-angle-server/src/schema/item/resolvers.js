import Expo from "expo-server-sdk";
import items from '~/data/items';
import uuid from 'uuid/v1';

const resolvers = {
    Query: {
        items: async (obj, args, ctx, info) => {
            return items;
        },
        item: async (obj, args, ctx, info) => {
            return items.find((item) => item.id === args.id); 
        },
        search: async (obj, args, ctx, info) => {
            const {foo} = args;
            return items.filter(({title, categories, price, photos}) => {
                const Product = [title, categories, price, photos].join(' ');
                return Product.toLowerCase().indexOf(foo.toLowerCase()) > -1;
            })
        }
    },

    Mutation: {
        // createItem: (obj,{title, categories, price, photos}, {db}, info ) => {
        //     db.item.create({
        //         title: title,
        //         categories: categories,
        //         price: price,
        //         photos: photos
        //     })
        // },
        createItem: (obj,args, ctx, info ) => {
            const {data} = args;
            let item = {
                id: uuidv1(),
                title: data.title,
                categories: data.categories,
                price: data.price,
                photos: data.photos
            }
            items.push(item);
            return items.find((i)=> i.id === item.id)
        },
        editItem: (obj, args, ctx, info) => {
            const {data} = args;
            const index = items.indexOf((item) => item.id === args.id);
            items[index] = {
                ...items[index],
                title: data.title || items[index].title,
                categories: data.categories || items[index].categories,
                price: data.price || items[index].price,
                photos: data.photos || items[index].photos
            }
            return items.find((item) => item.id === args.id)
        },
        deleteItem: (obj, {id}, {db}, info) =>{
            // db.user.destroy({
            //     where:{
            //         id: id
            //     }
            // })
        }
    },
    
    Item: {

    }
}

export default resolvers;