import { FormWrapper } from '../../styles/FormWrapper'

const ProductPrice = ({ buyPrice, rentPrice, updateFields }) => {
  return (
    <FormWrapper label={'Select Price'}>
      <div>
        <input
          className="product-form-input"
          autoFocus
          required
          type="number"
          placeholder="Purchase Price"
          value={buyPrice}
          onChange={(e) => {
            updateFields({ buyPrice: e.target.value })
          }}
        />
        <label htmlFor="rent">Rent</label>

        <div className="d-flex flex-row">
          <input
            required
            type="number"
            placeholder="$50"
            value={rentPrice}
            onChange={(e) => {
              updateFields({ rentPrice: e.target.value })
            }}
          />
          <select name="rent" type="number"/>
        </div>
      </div>
    </FormWrapper>
  )
}
export default ProductPrice
