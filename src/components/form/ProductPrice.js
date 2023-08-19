import { FormWrapper } from '../../styles/FormWrapper'

const ProductPrice = () => {
  return (
    <FormWrapper title={'Select Price'}>
      <div>
        <input autoFocus required type="number" placeholder="Purchase Price" />
        <label htmlFor="rent">Rent</label>

        <div className="d-flex flex-row">
          <input required type="number" placeholder="$50" />
          <select name="rent" type="number" />
        </div>
      </div>
    </FormWrapper>
  )
}
export default ProductPrice
