const typeDefs = /* GraphQL */ `
schema{
    query: Query
    mutation: Mutation
}

type Query{
    items: [Item!]!
    item(id: ID!): Item
    search(foo: String!): [Item!]!
}

type Mutation{
    createItem(title: String!, catergories: [String]!, price: Int!, photos: [String]!): Item!
    editItem(id: ID!, data: EditItemInput!): Item!
    deleteItem(id: ID!): Int!
}

#######

type Item{
    id: ID!
    title: String!
    categories: [String!]!
    price: Int!
    photos: [String]!
}

input EditItemInput{
    title: String
    categories: [String]
    price: Int
    photos: [String]
}
`

export default typeDefs;