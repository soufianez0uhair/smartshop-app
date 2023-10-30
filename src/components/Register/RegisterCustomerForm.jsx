import React from 'react'

const RegisterCustomerForm = () => {
  return (
    <form className="flex flex-col">
      <h1 className="text-5xl font-semibold mb-6">Create an account</h1>
      <p className="text-xl mb-14">Enter your details below</p>
      <div className="mb-10 flex flex-col text-xl gap-10">
        <input type="text" placeholder='Name' className="pb-2 border-b border-black-30" />
        <input type="text" placeholder='Email' className="pb-2 border-b border-black-30" />
        <input type="text" placeholder='Phone Number' className="pb-2 border-b border-black-30" />
        <input type="text" placeholder='Password' className="pb-2 border-b border-black-30" />
      </div>
      <button className="bg-button2 text-xl py-5 mb-6 rounded-lg text-white">Create Account</button>
      <p className='text-xl text-center'><span className='opacity-90 mr-3'>Already have an account?</span> <a href="#" className='border-b border-black-70 pb-1'>Log in</a></p>
    </form>
  )
}

export default RegisterCustomerForm