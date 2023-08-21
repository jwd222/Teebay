import useMultiStepForm from '../hooks/useMultiStepForm.js'
import {
  ProductTitle,
  ProductCategory,
  ProductDescription,
  ProductPrice,
  ProductSummary,
} from '../components/form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productList from '../data/productList.js'

const initialData = {
  title: '',
  category: '',
  description: '',
  buyPrice: '',
  rentPrice: '',
  date: Date(),
}

const AddProduct = () => {
  const [data, setData] = useState(initialData)
  const navigate = useNavigate()

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }
  const { step, isFirstStep, back, next, isLastStep } = useMultiStepForm([
    <ProductTitle {...data} updateFields={updateFields} />,
    <ProductCategory {...data} updateFields={updateFields} />,
    <ProductDescription {...data} updateFields={updateFields} />,
    <ProductPrice {...data} updateFields={updateFields} />,
    <ProductSummary {...data} updateFields={updateFields} />,
  ])
  const onSubmit = (e) => {
    e.preventDefault()
    if (!isLastStep) return next()
    console.log(data)
    productList.push(data)
    navigate('/dashboard')
  }
  return (
    <div
      className="login template d-flex justify-content-center align-items-center 100-w"
      style={{ minHeight: '100vh' }}
    >
      <div className="product-form p-5 rounded bg-white border border-black">
        <form onSubmit={onSubmit}>
          {step}
          <div className="d-flex flex-row justify-content-end mt-2">
            {!isFirstStep && (
              <button
                type="button"
                className="btn btn-primary me-auto"
                onClick={back}
              >
                Back
              </button>
            )}
            <button type="submit" className="btn btn-primary">
              {isLastStep ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default AddProduct
