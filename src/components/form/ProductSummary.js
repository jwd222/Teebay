import { FormWrapper } from '../../styles/FormWrapper'

const ProductSummary = ({
  title,
  category,
  description,
  buyPrice,
  rentPrice,
}) => {
  return (
    <FormWrapper label={'Summary'}>
      <div>
        <p>Title: {title}</p>
        <p>Categories: {category}</p>
        <p>Description: {description}</p>
        <p>Price: ${buyPrice}</p>
        <p>To rent: ${rentPrice} per day</p>
      </div>
    </FormWrapper>
  )
}
export default ProductSummary
