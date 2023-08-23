import { useMutation } from '@apollo/client'
import { DELETE_PRODUCT } from '../queries/GraphqlQueries'

const DeleteModal = ({ id }) => {
  const [deleteProduct, deleteProductData] = useMutation(DELETE_PRODUCT)
  // console.log(id)
  return (
    <>
      <button
        type="button"
        className="btn btn-link"
        data-bs-toggle="modal"
        data-bs-target="#deleteModal"
        onClick={() => {
          console.log('click')
        }}
      >
        Delete
      </button>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              Are you sure you want to delete this product?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  deleteProduct({
                    variables: {
                      deleteProductId: id,
                    },
                  })
                  console.log('product deleted')
                  // console.log(id)
                }}
                data-bs-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DeleteModal
