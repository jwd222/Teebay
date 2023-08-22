import { gql } from '@apollo/client'

// queries
// export const GET_USER = gql`
//   query GetUser($getUserId: ID!) {
//     getUser(id: $getUserId) {
//       firstName
//       email
//       password
//     }
//   }
// `

export const GET_USERID = gql`
  query ExampleQuery($email: String!, $password: String!) {
    getUserId(email: $email, password: $password)
  }
`

export const GET_PRODUCT_FROM_USERID = gql`
  query ExampleQuery($ownerId: ID) {
    getProductsFromId(ownerId: $ownerId) {
      title
      category
      description
      buyPrice
      rentPrice
    }
  }
`

// mutations
export const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $email: String!
    $password: String!
    $address: String!
    $phoneNumber: String!
  ) {
    createUser(
      firstName: $firstName
      email: $email
      password: $password
      address: $address
      phoneNumber: $phoneNumber
    )
  }
`
