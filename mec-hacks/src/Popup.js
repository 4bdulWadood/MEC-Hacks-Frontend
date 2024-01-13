// src/Popup.js
import React from 'react';

const Popup = ({ title, children }) => {
  return (
    <div style={{ border: '1px solid black', padding: '20px', margin: '20px', width: '300px' }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Popup;
