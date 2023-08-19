import categories from '../../data/categories'
import { FormWrapper } from '../../styles/FormWrapper'

const ProductCategory = () => {
  return (
    <FormWrapper title={'Select categories'}>
      <div>
        <select>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            )
          })}
        </select>
      </div>
    </FormWrapper>
  )
}
export default ProductCategory
