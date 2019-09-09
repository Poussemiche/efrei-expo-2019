import { mergeSchemas } from "graphql-tools";
import userSchema from './user';
import itemSchema from './item'

const schema = mergeSchemas({
    schemas:[
        userSchema,
        itemSchema,
    ]
})

export default schema;