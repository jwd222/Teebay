import { FormWrapper } from '../../styles/FormWrapper'

const ProductDescription = ({ description, updateFields }) => {
  return (
    <FormWrapper label={'Select Description'}>
      <input
        className="product-form-input"
        autoFocus
        required
        type="text"
        placeholder="Product Description"
        value={description}
        onChange={(e) => {
          // console.log(description)
          updateFields({ description: e.target.value })
        }}
      />
    </FormWrapper>
  )
}
export default ProductDescription
