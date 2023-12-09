import React from 'react';
import { useParams } from 'react-router-dom';
import PasswordResetForm from './PasswordResetForm';

function ResetPasswordPage() {
  const { token } = useParams();

  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm token={token} />
    </div>
  );
}

export default ResetPasswordPage;
