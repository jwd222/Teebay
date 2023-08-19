import productList from '../data/productList'
import { Product } from '../components'

const Products = () => {
  return (
    <div className="d-flex flex-column align-items-center h-100 justify-content-center">
      <h3>All products</h3>
      {productList.map((product) => {
        return (
          <Product
            title={product.title}
            price={product.price}
            description={product.description}
            date={product.date}
          />
        )
      })}
    </div>
  )
}
export default Products
