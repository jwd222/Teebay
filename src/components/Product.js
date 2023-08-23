import { DeleteModal, EditModal } from '../components'
import Card from './Card'

const Product = ({ ...data }) => {
  const { myPage } = data
  return (
    <div className="d-flex align-items-start">
      <Card {...data} />
      {myPage && <DeleteModal />}
    </div>
  )
}
export default Product
