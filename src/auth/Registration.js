import React, { useState } from 'react';
import axios from 'axios';


export default function Registration() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData);
      console.log(response.data); // Signup successful
    } catch (error) {
      console.error('Signup error:', error);
    }
  };
  return (
    <form className="splash" onSubmit={handleSubmit}>
       <input type="email" 
       name="email"
       value={formData.email}
       placeholder='Enter Email'
        required 
        onChange={handleChange}  
        />
       <input type="password" 
       placeholder='Enter password' 
       required 
       name="password"
       value={formData.password}
       onChange={handleChange}
       />
       <button type="submit" className='credentials'>Register</button>
    </form>
  )
}

