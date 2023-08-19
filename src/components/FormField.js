const FormField = ({ type, name, value, placeholderText, handleChange }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}></label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholderText}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  )
}

export default FormField
