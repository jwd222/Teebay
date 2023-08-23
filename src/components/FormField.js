const FormField = ({
  type,
  name,
  value,
  placeholderText,
  handleChange,
  labelText,
}) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        value={value}
        name={name}
        required
        placeholder={placeholderText}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  )
}

export default FormField
