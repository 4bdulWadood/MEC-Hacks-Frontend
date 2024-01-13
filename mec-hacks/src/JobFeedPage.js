// src/JobFeedPage.js
import React from 'react';

const JobFeedPage = () => {
  return (
    <div>
      <h2>Job Feed Page</h2>
      {/* Display 10 equally spaced cards here */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {[...Array(10)].map((_, index) => (
          <div key={index} style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
            Card {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobFeedPage;
