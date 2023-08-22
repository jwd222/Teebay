import { Modal } from '../components'
import Card from './Card'

const Product = ({ ...data }) => {
  return (
    <div className="d-flex align-items-start">
      <Card {...data} />
      <Modal />
    </div>
  )
}
export default Product
