import { DeleteModal } from '../components'
import Card from './Card'

const Product = ({ ...data }) => {
  const { id, myPage } = data
  // console.log(id)
  return (
    <div className="d-flex align-items-start">
      <Card {...data} />
      {myPage && <DeleteModal id={id} />}
    </div>
  )
}
export default Product
