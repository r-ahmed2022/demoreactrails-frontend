import React from 'react'

export default function Registration() {
  return (
    <form className="splash">
       <input type="text" placeholder='Enter username' required />
       <input type="password" placeholder='Enter password' required />
       <input type="password" placeholder='Confirm password' required />
       <button type="submit" className='credentials'>Register</button>
    </form>
  )
}
