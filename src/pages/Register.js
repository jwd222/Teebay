import '../styles/style.css'
import FormRow from '../components/FormRow'
import { useState } from 'react'

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w 100-vh">
      <div className="form_container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3>{values.isMember ? 'SIGN IN' : 'SIGN UP'}</h3>
          {/* firstname */}
          {!values.isMember && (
            <FormRow
              type={'text'}
              name={'firstName'}
              value={values.firstName}
              placeholderText={'First Name'}
              handleChange={handleChange}
            />
          )}
          {/* lastname */}
          {!values.isMember && (
            <FormRow
              type={'text'}
              name={'lastName'}
              value={values.text}
              placeholderText={'Last Name'}
              handleChange={handleChange}
            />
          )}
          {/* address */}
          {!values.isMember && (
            <FormRow
              type={'text'}
              name={'address'}
              value={values.address}
              placeholderText={'Address'}
              handleChange={handleChange}
            />
          )}
          {/* phone no */}
          {!values.isMember && (
            <FormRow
              type={'tel'}
              name={'phone'}
              value={values.phone}
              placeholderText={'Phone Number'}
              handleChange={handleChange}
            />
          )}
          {/* email */}
          <FormRow
            type={'email'}
            name={'email'}
            value={values.email}
            placeholderText={'Email'}
            handleChange={handleChange}
          />
          {/* password */}
          <FormRow
            type={'password'}
            name={'password'}
            value={values.password}
            placeholderText={'Password'}
            handleChange={handleChange}
          />
          {/* submit button */}
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              {!values.isMember ? 'Register' : 'Login'}
            </button>
          </div>
          <p className="text-center mt-2">
            {values.isMember
              ? " Don't have an account?"
              : 'Already have an account?'}
            <button
              type="button"
              onClick={toggleMember}
              className=" btn btn-primary ms-2"
            >
              {values.isMember ? 'Signup' : 'Sign In'}
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}
export default Register
