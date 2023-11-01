import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterCustomerForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: ""
  })

  function handleChange(e) {
    const {name, value} = e.target;

    setUser({
      ...user,
      [name]: value
    })
  }
  
  const [error, setError] = useState({});

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify(user)
    };

    fetch("http://localhost:8000/api/v1/users/register", requestOptions)
               .then(res => {
                if(!res.ok) {
                  return res.json().then(err => Promise.reject(err))
                } else {
                  return res.json()
                }
               })
               .then(data => {
                localStorage.setItem("token", data.token)
                navigate("/")
               })
               .catch(err => setError(err))
      
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <h1 className="text-5xl font-semibold mb-6">Create an account</h1>
      <p className="text-xl mb-14">Enter your details below</p>
      {error.message && <p className='text-xl text-red-500'>{error.message}</p>}
      <div className="mb-10 flex flex-col text-xl gap-10">
      <input type="text" placeholder='First Name' name="firstName" value={user.firstName} onChange={(e) => handleChange(e)} className="pb-2 border-b border-black-30" />
        <input type="text" placeholder='Last Name' name="lastName" value={user.lastName} onChange={(e) => handleChange(e)} className="pb-2 border-b border-black-30" />
        <input type="text" placeholder='Email' name="email" value={user.email} onChange={(e) => handleChange(e)} className="pb-2 border-b border-black-30" />
        <input type="text" placeholder='Phone Number' name="phoneNumber" value={user.phoneNumber} onChange={(e) => handleChange(e)} className="pb-2 border-b border-black-30" />
        <input type="text" placeholder='Password' name="password" value={user.password} onChange={(e) => handleChange(e)} className="pb-2 border-b border-black-30" />
      </div>
      <button className="bg-button2 text-xl py-5 mb-6 rounded-lg text-white">Create Account</button>
      <p className='text-xl text-center'><span className='opacity-90 mr-3'>Already have an account?</span> <a href="#" className='border-b border-black-70 pb-1'>Log in</a></p>
    </form>
  )
}

export default RegisterCustomerForm