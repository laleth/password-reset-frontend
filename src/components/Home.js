import React, { useState } from 'react';
import axios from 'axios';
import { API } from '../global';

function Home() {
  const [email, setEmail] = useState('');

  const handleClick = async () => {
    try {
      // Call the API endpoint for password reset
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

  return (
    <div className='Forget-Password'>
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
  );
}

export default Home;
