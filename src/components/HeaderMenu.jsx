import React from 'react'

const HeaderMenu = () => {
  return (
    <ul className="flex gap-14 text-2xl">
      <li>
        <a to="/">Home</a>
      </li>
      <li>
        <a to="/contact">Contact</a>
      </li>
      <li>
        <a to="/about">About</a>
      </li>
      <li>
        <a to="/signup">Sign Up</a>
      </li>
      <li>
        <a to="/login">Log In</a>
      </li>
    </ul>
  )
}

export default HeaderMenu