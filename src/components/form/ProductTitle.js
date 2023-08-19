import { FormWrapper } from '../../styles/FormWrapper'
const ProductTitle = () => {
  return (
    <FormWrapper title={'Select a title for your product'}>
      <div>
        <input autoFocus required type="text" placeholder="Product Title" />
      </div>
    </FormWrapper>
  )
}
export default ProductTitle
