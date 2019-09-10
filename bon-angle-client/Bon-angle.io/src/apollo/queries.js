import gql from "graphql-tag";

export const GET_USERS = gql`
  {
    users {
      lastName
      city
    }
  }
`

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      city
    }
  }
`


export const SEARCH_USER = gql`
  query xxx($foo: String!) {
    search(foo: $foo) {
      id
      firstName
      lastName
      city
    }
  }
`;

export const GET_ITEMS = gql`
 {
    items {
        title
        categories
        price
    }
 }
`;
export const GET_ITEM = gql`
 query item($id: ID!){
     user(id: $id) {
         id
         title
         categories
         price
         photos
     }
 }
`;

export const SEARCH_ITEM = gql`
 query xxx($foo: String!) {
     search(foo: $foo) {
        id
        title
        categories
        price
        photos
     }
 }
`;
