// import { Link } from 'react-router-dom'
import { ViewModal, EditModal } from '../components/modals'

const Card = ({
  id,
  title,
  category,
  description,
  buyPrice,
  rentPrice,
  createdAt,
  myPage,
  isForm,
  rentTime,
  ownerId,
}) => {
  // console.log(typeof Number(createdAt))
  // let date = new Date(Number(createdAt)).toLocaleString()
  // console.log(date.toLocaleDateString('en-US'))
  return (
    <div className="product-card card d-flex justify-content-center align-content-center my-2">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          {isForm ? (
            <p className="card-title">Title: {title}</p>
          ) : !myPage ? (
            <ViewModal title={title} id={id} ownerId={ownerId} />
          ) : (
            <EditModal title={title} id={id} />
          )}
          {/* <Link
            to={myPage ? '/edit-product' : '/view-product'}
            className="card-title"
            state={{ key, title, category, description, buyPrice, rentPrice }}
          >
            Title: {title}
          </Link> */}
        </div>
        <div className="mt-2" style={{ transform: 'rotate(0)' }}>
          <p className="card-text">Category: {category}</p>
          <p className="card-text">Description: {description}</p>
          <p className="card-text">Price: ${buyPrice}</p>
          <div className="d-flex">
            <p className="card-text">Rent: ${rentPrice}</p>
            <p className="card-text">{rentTime}</p>
          </div>
          {!isForm && (
            <p className="card-text">
              Date posted: {new Date(Number(createdAt)).toLocaleDateString()}
            </p>
          )}
          {/* <Link to="/edit-product" /> */}
        </div>
      </div>
    </div>
  )
}
export default Card
