// src/RegistrationPage.js
import React from 'react';
import Popup from './Popup';

const RegistrationPage = () => {
  const handleRegistration = () => {
    // Implement registration logic here
    alert('Registering...');
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <Popup title="Registration">
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
        <label>
          Location:
          <select>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <select>
            <option value="Option A">Option A</option>
            <option value="Option B">Option B</option>
            <option value="Option C">Option C</option>
          </select>
          <select>
            <option value="City X">City X</option>
            <option value="City Y">City Y</option>
            <option value="City Z">City Z</option>
          </select>
        </label>
        <br />
        <button onClick={handleRegistration}>Register</button>
      </Popup>
    </div>
  );
};

export default RegistrationPage;
