import { FormWrapper } from '../../styles/FormWrapper'
import Card from '../Card'
const ProductSummary = ({ ...data }) => {
  return (
    <FormWrapper label={'Summary'}>
      <Card {...data} />
    </FormWrapper>
  )
}
export default ProductSummary
