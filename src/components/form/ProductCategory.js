import categories from '../../data/categories'
import { FormWrapper } from '../../styles/FormWrapper'

const ProductCategory = ({ category, updateFields }) => {
  return (
    <FormWrapper label={'Select categories'}>
      <select
        className="w-100"
        value={category}
        onChange={(e) => {
          console.log(category)
          updateFields({ category: e.target.value })
        }}
      >
        {categories.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </FormWrapper>
  )
}
export default ProductCategory
