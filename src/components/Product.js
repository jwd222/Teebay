const Product = ({ title, price, description, date }) => {
  return (
    <div className="product-card card d-flex justify-content-center align-content-center my-2">
      <div class="card-body">
        <div className="d-flex justify-content-between">
          <h5 class="card-title">{title}</h5>
          <button className="btn btn-default">Click me</button>
        </div>
        <p class="card-text">{description}</p>
        <p class="card-text">{price}</p>
        <p class="card-text">{date}</p>
      </div>
    </div>
  )
}
export default Product
