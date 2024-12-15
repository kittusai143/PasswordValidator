import React, { useState } from 'react';
import './index.css';

function PasswordValidator() {
  const [password, setPassword] = useState(''); // State for password

  // Function to handle password change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword); // Calls setter with the new value
  };

  return (
    <div className="container">
      <div className="validator-box">
        <h1 className="main-heading">Password Validator</h1>
        <p>Check how strong and secure is your password</p>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange} // Sets password when input changes
        />
        {password.length < 8 && (
          <p className="error-text">
            Your password must be at least 8 characters
          </p>
        )}
      </div>
    </div>
  );
}

export default PasswordValidator;
