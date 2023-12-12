import React, { useState } from 'react';
import axios from 'axios';
import { API } from '../global';
import "../style/home.css"

function Home() {
  const [email, setEmail] = useState('');
  const [regemail, setRegemail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleClick = async () => {
    try {
    
      const response = await axios.post(`${API}/users/reset-password`, { email });

      if (response.status === 200) {
        
        const token = response.data.token;
        window.location.href = `${API}/users/reset-password/${token}`;
      } else {
        
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      
      alert('Invalid Credentials. Please Try again.');
    }
  };
  const handleRegister = async () => {
    try {
      const response = await axios.post(`${API}/users/register`, { username: username, password:password,email:regemail });

      if (response.status === 200) {
        alert('User registered successfully');
        
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during user registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className='Forget-Password'>
      <div className='register'>
      <h2>Please register by providing the Email and Password</h2>
      <input type='text' placeholder='Enter Your Username' onChange={(e)=>setUsername(e.target.value)} value={username}/><br/>
      <input type='password' placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} value={password}/><br/>
      <input type='text' placeholder='Enter Your Eamil' onChange={(e)=>setRegemail(e.target.value)}value={regemail}/><br/>
      <button type='button' onClick={handleRegister}>
        Register
      </button>
      </div>
      <div className='Password-Reset'>
      <h2>Please Enter the Register email to send the Password reset Link</h2>
      <input
        type='text'
        placeholder='Enter Your Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button type='button' onClick={handleClick}>
        Submit
      </button>
      </div>
    </div>
  );
}

export default Home;
