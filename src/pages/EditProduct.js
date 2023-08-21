const EditProduct = () => {
  const userId = localStorage.getItem('userId')
  return (
    <div>
      <h1>{userId}</h1>
    </div>
  )
}
export default EditProduct
