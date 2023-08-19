import categories from '../../data/categories'
import { FormWrapper } from '../../styles/FormWrapper'

const ProductCategory = ({ category, updateFields }) => {
  return (
    <FormWrapper label={'Select categories'}>
      <div>
        <select>
          {categories.map((item, index) => {
            return (
              <option
                key={index}
                value={category}
                onChange={(e) => {
                  updateFields({ category: e.target.value })
                }}
              >
                {item}
              </option>
            )
          })}
        </select>
      </div>
    </FormWrapper>
  )
}
export default ProductCategory
