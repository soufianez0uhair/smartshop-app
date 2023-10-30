import React from 'react'
import SplitScreen from '../layout/SplitScreen'
import AuthImg from '../assets/auth.jpg'
import RegisterCustomerForm from '../components/Register/RegisterCustomerForm'

const Register = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-131.5px)] min-w-full'>
      <RegisterCustomerForm />
    </div>
  )
}

export default Register