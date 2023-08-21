import { gql } from '@apollo/client'

// queries
// export const GetUserQuery = gql`
//   query GetUser($getUserId: ID!) {
//     getUser(id: $getUserId) {
//       firstName
//       email
//       password
//     }
//   }
// `

export const GetUserIdQuery = gql`
  query ExampleQuery($email: String!, $password: String!) {
    getUserId(email: $email, password: $password)
  }
`

// mutations
export const CreateUserQuery = gql`
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
