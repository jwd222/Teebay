import { useMutation } from '@apollo/client'
import { CREATE_TRANSACTION } from '../../queries/GraphqlQueries'

const ViewModalButton = ({ id, ownerId, isRent }) => {
  const [createTransaction] = useMutation(CREATE_TRANSACTION)
  const status = isRent ? 'RENTING' : 'SELLING'
  const buttonText = isRent ? 'Rent' : 'Buy'
  return (
    <button
      type="button"
      className={isRent ? 'btn btn-danger' : 'btn btn-primary'}
      data-bs-dismiss="modal"
      onClick={() => {
        createTransaction({
          variables: {
            productId: id,
            fromUserId: ownerId,
            toUserId: localStorage.getItem('userId'),
            transactionStatus: status,
          },
        })
        console.log('product rented')
      }}
    >
      {buttonText}
    </button>
  )
}
export default ViewModalButton
