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
      id
      title
      category
      description
      buyPrice
      rentPrice
      rentTime
      createdAt
    }
  }
`
export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      id
      title
      category
      description
      buyPrice
      rentPrice
      rentTime
      createdAt
      ownerId
    }
  }
`

export const GET_TRANSACTION = gql`
  query Query($productId: ID!) {
    getTransactionFromProductId(productId: $productId) {
      fromUserId
      toUserId
    }
  }
`

// mutations
export const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String
    $email: String!
    $password: String!
    $address: String!
    $phoneNumber: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      address: $address
      phoneNumber: $phoneNumber
    )
  }
`

export const CREATE_PRODUCT = gql`
  mutation Mutation(
    $title: String!
    $category: String!
    $description: String!
    $buyPrice: Float!
    $rentPrice: Float!
    $rentTime: String!
    $ownerId: ID!
  ) {
    createProduct(
      title: $title
      category: $category
      description: $description
      buyPrice: $buyPrice
      rentPrice: $rentPrice
      rentTime: $rentTime
      ownerId: $ownerId
    )
  }
`

export const DELETE_PRODUCT = gql`
  mutation Mutation($deleteProductId: ID!) {
    deleteProduct(id: $deleteProductId)
  }
`

export const CREATE_TRANSACTION = gql`
  mutation Mutation(
    $productId: ID!
    $fromUserId: ID!
    $toUserId: ID!
    $transactionStatus: String!
  ) {
    createTransaction(
      productId: $productId
      fromUserId: $fromUserId
      toUserId: $toUserId
      transactionStatus: $transactionStatus
    )
  }
`
