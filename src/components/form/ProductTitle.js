import { FormWrapper } from '../../styles/FormWrapper'
const ProductTitle = ({ title, updateFields }) => {
  return (
    <FormWrapper label={'Select a title for your product'}>
      <div>
        <input
          autoFocus
          required
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => {
            updateFields({ title: e.target.value })
          }}
        />
      </div>
    </FormWrapper>
  )
}
export default ProductTitle
