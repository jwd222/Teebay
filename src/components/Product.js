import { DeleteModal } from '../components/modals'
import Card from './Card'

const Product = ({ ...data }) => {
  const { id, myPage } = data
  // console.log(ownerId)
  return (
    <div className="d-flex align-items-start">
      <Card {...data} />
      {myPage && <DeleteModal id={id} />}
    </div>
  )
}
export default Product
