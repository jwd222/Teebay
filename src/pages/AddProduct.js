import useMultiStepForm from '../hooks/useMultiStepForm.js'
import {
  ProductTitle,
  ProductCategory,
  ProductDescription,
  ProductPrice,
  ProductSummary,
} from '../components/form'

const AddProduct = () => {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultiStepForm([
      <ProductTitle />,
      <ProductCategory />,
      <ProductDescription />,
      <ProductPrice />,
      <ProductSummary />,
    ])
  const onSubmit = (e) => {
    e.preventDefault()
    next()
  }
  return (
    <div
      className="login template d-flex justify-content-center align-items-center 100-w"
      style={{ minHeight: '100vh' }}
    >
      <div className="form_container p-5 rounded bg-white border border-black">
        <form onSubmit={onSubmit}>
          {step}
          <div className="d-flex flex-row">
            <div>
              {!isFirstStep && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={back}
                >
                  Back
                </button>
              )}
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                {isLastStep ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default AddProduct
