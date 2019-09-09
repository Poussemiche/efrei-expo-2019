import { GraphQLServer } from 'graphql-yoga'
import schema from './schema'
import db from './models';

const server = new GraphQLServer({
    schema,
    context: { db },
})

const PORT = 4000;
server.start({ port: PORT }, () => {
	console.log(`Server started on port ${PORT} => http://localhost:${PORT}`)
})
