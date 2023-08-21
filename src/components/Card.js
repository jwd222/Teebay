import { Link } from 'react-router-dom'
import Modal from './Modal'

const Card = ({ title, description, buyPrice, date }) => {
  return (
    <div className="product-card card d-flex justify-content-center align-content-center my-2">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-text">Title: {title}</h5>
          {/* <Modal /> */}
        </div>
        <div className="mt-2" style={{ transform: 'rotate(0)' }}>
          <p className="card-text">Description: {description}</p>
          <p className="card-text">Price: {buyPrice}</p>
          <p className="card-text">Date: {date}</p>
          <Link to="/edit-product" className="stretched-link" />
        </div>
      </div>
    </div>
  )
}
export default Card
