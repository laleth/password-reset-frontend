import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Make sure you have React Router installed
import axios from 'axios';
import { API } from '../global';

function PasswordResetForm() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/users/reset-password/${token}`);
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        // Handle the error as needed
      }
    };

    fetchData();
  }, [token]);

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`${API}/users/reset-password/${token}`, { newPassword });

      if (response.status === 200) {
        console.log('Password reset successful');
        // Redirect or display a success message as needed
      } else {
        console.error('Password reset failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during password reset:', error.message);
    }
  };

  if (!user) {
    return <div>Loading...</div>; // You can show a loading indicator while fetching data
  }

  return (
    <div>
      <h1>Password Reset Form</h1>
      <p>User found: {user.username}</p>
      <label htmlFor="newPassword">New Password:</label>
      <input
        type="password"
        id="newPassword"
        name="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="button" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
  );
}

export default PasswordResetForm;
