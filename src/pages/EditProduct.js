import { GET_PRODUCT_FROM_USERID } from '../queries/RegisterLoginQueries'
import { useLazyQuery, useQuery } from '@apollo/client'
import { useEffect } from 'react'

const EditProduct = () => {
  const userId = localStorage.getItem('userId')
  const getProductFromUserIdData = useQuery(GET_PRODUCT_FROM_USERID, {
    variables: {
      ownerId: userId,
    },
  })

  useEffect(() => {
    if (getProductFromUserIdData) {
      console.log(getProductFromUserIdData.data)
    }
  }, [getProductFromUserIdData.data])
  return (
    <div>
      <h1>{userId}</h1>
    </div>
  )
}
export default EditProduct
