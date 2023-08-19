import productList from '../data/productList'
import { Product } from '../components'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div className="d-flex flex-row-reverse m-4">
        <button className="btn btn-danger">Logout</button>
      </div>
      <div className="d-flex flex-column align-items-center h-100 justify-content-center">
        <h3>All products</h3>
        {productList.map((product, index) => {
          return (
            <Product
              key={index}
              title={product.title}
              price={product.buyPrice}
              description={product.description}
              date={product.date}
            />
          )
        })}
        <div className="d-flex m-4 flex-row-reverse">
          <Link to="/add-product" className="btn btn-primary">
            Add Product
          </Link>
        </div>
      </div>
    </>
  )
}
export default Products
