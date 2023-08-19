import Modal from './Modal'

const Product = ({ id, title, price, description, date }) => {
  return (
    <>
      <div className="product-card card d-flex justify-content-center align-content-center my-2">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{title}</h5>
            <Modal />
          </div>
          <p className="card-text">{description}</p>
          <p className="card-text">{price}</p>
          <p className="card-text">{date}</p>
        </div>
      </div>
    </>
  )
}
export default Product
