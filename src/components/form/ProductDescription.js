import { FormWrapper } from '../../styles/FormWrapper'

const ProductDescription = () => {
  return (
    <FormWrapper title={'Select Description'}>
      <div>
        <input
          autoFocus
          required
          type="text"
          placeholder="Product Description"
        />
      </div>
    </FormWrapper>
  )
}
export default ProductDescription
