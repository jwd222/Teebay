import ViewModalButton from './ViewModalButton'

const ViewModal = ({ title, id, ownerId }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-default"
        data-bs-toggle="modal"
        data-bs-target="#viewModal"
        onClick={() => {
          // console.log(id)
          // console.log(ownerId)
          // console.log(toUserId)
        }}
      >
        Title: {title}
      </button>

      <div
        className="modal fade"
        id="viewModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">Viewing Product</div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  createTransaction({
                    variables: {
                      productId: id,
                      fromUserId: ownerId,
                      toUserId: localStorage.getItem('userId'),
                      transactionStatus: 'RENTING',
                    },
                  })
                  console.log('product rented')
                }}
              >
                Rent
              </button> */}
              <ViewModalButton id={id} ownerId={ownerId} isRent={true} />
              <ViewModalButton id={id} ownerId={ownerId} isRent={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ViewModal
