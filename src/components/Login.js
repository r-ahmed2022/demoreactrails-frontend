import React from 'react'

export default function Login() {
  return (
    <form className="splash">
    <input type="text" placeholder='Enter username' required />
    <input type="password" placeholder='Enter password' required />
    <button className='credentials'>Log In</button>
 </form>

  )
}
