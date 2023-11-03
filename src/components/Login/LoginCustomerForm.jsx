import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const LoginCustomerForm = () => {
  const [user, setUser] = useState({
    email: "",
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
console.log(error);
  async function handleSubmit(e) {
    e.preventDefault();

    if(!user.email || !user.password) {
      setError({message: "Please fill in all the fields"})
    } else {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(user)
      };
  
      fetch("http://localhost:8000/api/v1/users/login", requestOptions)
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

  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <h1 className="text-5xl font-semibold mb-6">Log in to ShopSmart</h1>
      <p className="text-xl mb-14">Enter your details below</p>
      {error.message && <p className='text-xl text-red-500'>{error.message}</p>}
      <div className="mb-10 flex flex-col text-xl gap-10">
        <input type="text" placeholder='Email' name="email" value={user.email} onChange={(e) => handleChange(e)} className="pb-2 border-b border-black-30" />
        <input type="text" placeholder='Password' name="password" value={user.password} onChange={(e) => handleChange(e)} className="pb-2 border-b border-black-30" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <button className="bg-button2 text-xl py-5 mb-6 rounded-lg text-white px-12">Log In</button>
        <a href="#" className='text-xl text-red-500'>Forget Password?</a>
      </div>
      <p className='text-xl text-center'><span className='opacity-90 mr-3'>No account yet?</span> <Link to="/register" className='border-b border-black-70 pb-1'>Sign up</Link></p>
    </form>
  )
}

export default LoginCustomerForm