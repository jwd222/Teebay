import { Link } from 'react-router-dom'

const Card = ({
  key,
  title,
  category,
  description,
  buyPrice,
  rentPrice,
  createdAt,
}) => {
  // console.log(typeof Number(createdAt))
  // let date = new Date(Number(createdAt)).toLocaleString()
  // console.log(date.toLocaleDateString('en-US'))
  return (
    <div className="product-card card d-flex justify-content-center align-content-center my-2">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          {/* <h5 className="card-text">Title: {title}</h5> */}
          <Link
            to="/edit-product"
            className="card-title"
            state={{ key, title, category, description, buyPrice, rentPrice }}
          >
            Title: {title}
          </Link>
        </div>
        <div className="mt-2" style={{ transform: 'rotate(0)' }}>
          <p className="card-text">Category: {category}</p>
          <p className="card-text">Description: {description}</p>
          <p className="card-text">Price: ${buyPrice}</p>
          <p className="card-text">Rent: ${rentPrice}</p>
          <p className="card-text">
            Created at: {new Date(Number(createdAt)).toLocaleString()}
          </p>
          {/* <Link to="/edit-product" /> */}
        </div>
      </div>
    </div>
  )
}
export default Card
