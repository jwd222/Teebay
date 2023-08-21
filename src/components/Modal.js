const Modal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-link"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          console.log('click')
        }}
      >
        Delete
      </button>

      <div
        className="modal fade"
        id="exampleModal"
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
                  console.log('product deleted')
                }}
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
export default Modal
