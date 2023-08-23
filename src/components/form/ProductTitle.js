import { FormWrapper } from '../../styles/FormWrapper'
const ProductTitle = ({ title, updateFields }) => {
  return (
    <FormWrapper label={'Select a title for your product'}>
      <input
        className="product-form-input"
        autoFocus
        required
        type="text"
        placeholder="Product Title"
        value={title}
        onChange={(e) => {
          // console.log(e.target.value)
          updateFields({ title: e.target.value })
        }}
      />
    </FormWrapper>
  )
}
export default ProductTitle
