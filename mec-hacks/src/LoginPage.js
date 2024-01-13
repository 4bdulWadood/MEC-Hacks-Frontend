// src/LoginPage.js
import React from 'react';
import Popup from './Popup';

const LoginPage = () => {
  const handleLogin = () => {
    // Implement login logic here
    alert('Logging in...');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <Popup title="Login">
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button style={{ backgroundColor: 'yellow' }} onClick={handleLogin}>
          Login
        </button>
      </Popup>
    </div>
  );
};

export default LoginPage;
