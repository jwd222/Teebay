import { rentTimes } from '../../data/categories'
import { FormWrapper } from '../../styles/FormWrapper'

const ProductPrice = ({ buyPrice, rentPrice, rentTime, updateFields }) => {
  return (
    <FormWrapper label={'Select Price'}>
      <div>
        <input
          className="product-form-input"
          autoFocus
          required
          type="number"
          step="0.01"
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
            step="0.01"
            value={rentPrice}
            onChange={(e) => {
              updateFields({ rentPrice: e.target.value })
            }}
          />
          <select
            className="w-100"
            value={rentTime}
            onChange={(e) => {
              console.log(rentTime)
              updateFields({ rentTime: e.target.value })
            }}
          >
            {rentTimes.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </FormWrapper>
  )
}
export default ProductPrice
