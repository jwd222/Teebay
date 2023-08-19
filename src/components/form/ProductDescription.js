import { FormWrapper } from '../../styles/FormWrapper'

const ProductDescription = ({ description, updateFields }) => {
  return (
    <FormWrapper label={'Select Description'}>
      <div>
        <input
          autoFocus
          required
          type="text"
          placeholder="Product Description"
          value={description}
          onChange={(e) => {
            updateFields({ description: e.target.value })
          }}
        />
      </div>
    </FormWrapper>
  )
}
export default ProductDescription
