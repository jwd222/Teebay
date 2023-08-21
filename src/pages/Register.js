import '../styles/style.css'
import FormField from '../components/FormField'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import {
  CreateUserQuery,
  GetUserIdQuery,
  GetUserQuery,
} from '../queries/RegisterLoginQueries'

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
  const navigate = useNavigate()

  // queries
  // const getUserQueryData = useQuery(GetUserQuery, {
  //   variables: {
  //     getUserId: '28b70f8e-dc26-4621-bc96-25181268c291',
  //   },
  // })

  const [getUserId, getUserLoginQueryData] = useLazyQuery(GetUserIdQuery)

  // mutation
  const [createUser, createUserQueryData] = useMutation(CreateUserQuery)

  useEffect(() => {
    // console.log(getUserQueryData.data)
    // console.log(createUserQueryData.data)
    // console.log(getUserLoginQueryData.data)
    if (getUserLoginQueryData.data) {
      const { getUserId } = getUserLoginQueryData.data
      localStorage.setItem('userId', getUserId)
      setTimeout(() => {
        navigate('/edit-product')
      }, 1000)
      console.log(getUserId)
    } else {
    }
  }, [
    // getUserQueryData.data,
    createUserQueryData.data,
    getUserLoginQueryData.data,
  ])

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    // console.log(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('clicked')
    // console.log(values)
    const { firstName, lastName, address, phone, email, password } = values
    // for register
    if (values.isMember) {
      // for login
      getUserId({
        variables: {
          email: values.email,
          password: values.password,
        },
      })
      // navigate('/edit-product')
    } else {
      createUser({
        variables: {
          firstName: firstName,
          email: email,
          password: password,
          address: address,
          phoneNumber: phone,
        },
      })
    }
    if (!values.isMember) {
      setTimeout(() => {
        setValues({ ...values, isMember: !values.isMember })
      }, 1000)
    }
  }

  return (
    <div
      className="login template d-flex justify-content-center align-items-center 100-w"
      style={{ minHeight: '100vh' }}
    >
      <div className="form_container p-5 rounded bg-white border border-black">
        <form onSubmit={handleSubmit}>
          <h3>{values.isMember ? 'SIGN IN' : 'SIGN UP'}</h3>
          <div className="d-flex justify-content-between">
            {/* firstname */}
            {!values.isMember && (
              <FormField
                type={'text'}
                name={'firstName'}
                value={values.firstName}
                placeholderText={'First Name'}
                handleChange={handleChange}
              />
            )}
            {/* lastname */}
            {!values.isMember && (
              <FormField
                type={'text'}
                name={'lastName'}
                value={values.text}
                placeholderText={'Last Name'}
                handleChange={handleChange}
              />
            )}
          </div>
          {/* address */}
          {!values.isMember && (
            <FormField
              type={'text'}
              name={'address'}
              value={values.address}
              placeholderText={'Address'}
              handleChange={handleChange}
            />
          )}
          <div className={!values.isMember ? 'd-flex' : ''}>
            {/* phone no */}
            {!values.isMember && (
              <FormField
                type={'tel'}
                name={'phone'}
                value={values.phone}
                placeholderText={'Phone Number'}
                handleChange={handleChange}
              />
            )}
            {/* email */}
            <FormField
              type={'email'}
              name={'email'}
              value={values.email}
              placeholderText={'Email'}
              handleChange={handleChange}
            />
          </div>
          {/* password */}
          <FormField
            type={'password'}
            name={'password'}
            value={values.password}
            placeholderText={'Password'}
            handleChange={handleChange}
          />
          {/* confirm password */}
          {!values.isMember && (
            <FormField
              type={'password'}
              name={'password'}
              value={values.password}
              placeholderText={'Confirm Password'}
              handleChange={handleChange}
            />
          )}
          {/* submit button */}
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-primary " type="submit">
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
              className=" btn btn-link "
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
