const typeDefs = /* GraphQL */ `
schema{
    query: Query
    mutation: Mutation
}

type Query{
    users: [User!]!
    user(id: ID!): User
    search(foo: String!): [User!]!
}

type Mutation{
    createUser(firstName: String!, lastName: String!, city: String!): User!
    editUser(id: ID!, data: EditUserInput!): User!
    deleteUser(id: ID!): ID!
    storeUserExpoToken(token: String!): StoreUserExpoTokenResponse!
    sendNotification(token: String!): StoreUserExpoTokenResponse!
}

########

type User{
    id: ID!
    firstName: String!
    lastName: String!
    city: String!
}

input EditUserInput{
    firstName: String
    lastName: String
    city: String
}

type StoreUserExpoTokenResponse{
    success: Boolean!
}
`
export default typeDefs;