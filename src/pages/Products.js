// import productList from '../data/productList'
import { Product } from '../components'
import { Link } from 'react-router-dom'

import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_FROM_USERID,
} from '../queries/GraphqlQueries'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const userId = localStorage.getItem('userId')

  const navigate = useNavigate()
  const getProductFromUserIdData = useQuery(GET_PRODUCT_FROM_USERID, {
    variables: {
      ownerId: userId,
    },
  })

  const getAllProductsData = useQuery(GET_ALL_PRODUCTS)

  let [products, setProducts] = useState([])
  let [myPage, setMyPage] = useState(true)

  useEffect(() => {
    if (myPage) {
      if (getProductFromUserIdData.data) {
        // console.log(getProductFromUserIdData.data)
        const { getProductsFromId } = getProductFromUserIdData?.data
        setProducts([...getProductsFromId])
        // console.log(getProductsFromId)
      }
    } else {
      if (getAllProductsData.data) {
        // console.log(getAllProductsData.data)
        const { getAllProducts } = getAllProductsData?.data
        setProducts([...getAllProducts])
        // console.log(getAllProducts)
      }
    }
  }, [getProductFromUserIdData.data, getAllProductsData.data, myPage])
  // console.log(newProductList)

  const logOut = () => {
    localStorage.removeItem('userId')
    navigate('/')
  }
  const allProducts = () => {
    setMyPage(!myPage)
    // navigate('/dashboard')
  }

  return (
    <>
      <div className="d-flex justify-content-between m-4">
        <button
          className="btn btn-secondary"
          onClick={() => {
            allProducts()
          }}
        >
          All Products
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            logOut()
          }}
        >
          Logout
        </button>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h3>{myPage ? 'My products' : 'All Products'}</h3>
        {products.map((product) => {
          // console.log(product)
          return (
            <Product
              key={product.title}
              title={product.title}
              buyPrice={product.buyPrice}
              rentPrice={product.rentPrice}
              description={product.description}
              category={product.category}
              createdAt={product.createdAt}
              myPage={myPage}
            />
          )
        })}
        <div className="d-flex m-4 flex-row-reverse">
          {myPage && (
            <Link to="/add-product" className="btn btn-primary">
              Add Product
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
export default Products
