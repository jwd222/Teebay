const ViewModal = ({ title }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-default"
        data-bs-toggle="modal"
        data-bs-target="#viewModal"
        onClick={() => {
          console.log('click')
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
            {/* <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div> */}
            <div className="modal-body">Viewing Product</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  console.log('product rented')
                }}
              >
                Rent
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  console.log('product bought')
                }}
                // close for now later make onclick function work
                data-bs-dismiss="modal"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ViewModal
