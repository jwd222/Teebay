const FormRow = ({ type, name, value, placeholderText, handleChange }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}></label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholderText}
        className="form-control"
        onChange={handleChange}
      />
    </div>
  )
}

export default FormRow
