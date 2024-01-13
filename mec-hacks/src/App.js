// App.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

const Login = ({ onLoginButtonClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
    onLoginButtonClick();
  };

  return (
    <div className="Login" style={{ backgroundColor: '#165E85', color: 'white', padding: '20px' }}>
      <h2>Login Page</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

const Registration = ({ onRegisterButtonClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [location, setLocation] = useState({
    city: '',
  });
  const [jobType, setJobType] = useState('');
  const [accessibilityNeeds, setAccessibilityNeeds] = useState('');
  const [skills, setSkills] = useState('');

  
  const cities = [
    'Select City',
    // Add all Canadian cities here
    'Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Edmonton', 'Ottawa', 'Quebec City', 'Winnipeg',
    'Hamilton', 'Kitchener', 'London', 'St. Catharines', 'Halifax', 'Oshawa', 'Victoria', 'Windsor',
    'Saskatoon', 'Regina', 'Sherbrooke', 'St. John\'s', 'Barrie', 'Kelowna', 'Abbotsford', 'Greater Sudbury',
    'Kingston', 'Guelph', 'Trois-Rivières', 'Moncton', 'Brantford', 'Thunder Bay', 'Saint John', 'Peterborough',
    'Saguenay', 'Lethbridge', 'Nanaimo', 'Kamloops', 'Belleville', 'Chatham-Kent', 'Fredericton', 'Chilliwack',
    'Red Deer', 'Sault Ste. Marie', 'Drummondville', 'Kawartha Lakes', 'Saint John\'s', 'Medicine Hat', 'Granby',
    'Grande Prairie', 'North Bay', 'Norfolk County', 'Charlottetown', 'Shawinigan', 'Cornwall', 'Fort McMurray',
    // Add all US cities here
    'New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego',
    'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Indianapolis', 'Columbus', 'Fort Worth',
    'Charlotte', 'Seattle', 'Denver', 'Washington', 'Boston', 'El Paso', 'Nashville', 'Detroit', 'Oklahoma City',
    'Portland', 'Las Vegas', 'Memphis', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno',
    'Sacramento', 'Kansas City', 'Long Beach', 'Mesa', 'Atlanta', 'Colorado Springs', 'Virginia Beach', 'Raleigh',
    'Omaha', 'Miami', 'Oakland', 'Minneapolis', 'Tulsa', 'Wichita', 'New Orleans', 'Arlington', 'Cleveland', 'Bakersfield',
    'Tampa', 'Aurora', 'Honolulu', 'Anaheim', 'Santa Ana', 'St. Louis', 'Riverside', 'Corpus Christi', 'Pittsburgh',
    'Lexington', 'Anchorage', 'Stockton', 'Cincinnati', 'St. Paul', 'Toledo', 'Greensboro', 'Newark', 'Plano', 'Henderson'
  ];

  const handleRegister = async () => {
    const apiEndpoint = 'http://localhost:5000/api/job';

    const data = {
      username,
      password,
      experienceLevel,
      location,
      jobType,
      accessibilityNeeds,
      skills,
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.error('Error:', response.status, response.statusText);
      }

      onRegisterButtonClick();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Registration" style={{ backgroundColor: '#165E85', color: 'white', padding: '20px' }}>
      <h2>Registration Page</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Experience Level:
        <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)}>
          <option value="">Select Experience Level</option>
          <option value="Entry">Entry</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </label>
      <label>
        Location:
        <select value={location.city} onChange={(e) => setLocation({ ...location, city: e.target.value })}>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </label>
      <label>
        Job Type:
        <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option value="">Select Job Type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
        </select>
      </label>
      <label>
        Accessibility Needs:
        <input type="text" value={accessibilityNeeds} onChange={(e) => setAccessibilityNeeds(e.target.value)} />
      </label>
      <label>
        Skills:
        <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

const JobFeed = ({ onClose }) => {
  const cards = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="JobCard">
      <h3>Job #{index + 1}</h3>
      <p>Description of the job goes here.</p>
    </div>
  ));

  return (
    <div className="JobFeed" style={{ backgroundColor: '#165E85', color: 'white', padding: '20px' }}>
      <h2>JobFeed Page</h2>
      <div className="JobCardContainer">{cards}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

const Popup = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      style={{
        content: {
          backgroundColor: 'white',
          padding: '20px',
          width: '300px',
          margin: 'auto',
          marginTop: '100px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <h3>{title}</h3>
      {children}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

function App() {
  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);
  const [isRegistrationPopupVisible, setIsRegistrationPopupVisible] = useState(false);
  const [isJobFeedVisible, setIsJobFeedVisible] = useState(false);

  const handleLoginPopupOpen = () => {
    setIsLoginPopupVisible(true);
  };

  const handleLoginPopupClose = () => {
    setIsLoginPopupVisible(false);
  };

  const handleRegistrationPopupOpen = () => {
    setIsRegistrationPopupVisible(true);
  };

  const handleRegistrationPopupClose = () => {
    setIsRegistrationPopupVisible(false);
  };

  const handleRegisterButtonClick = () => {
    setIsRegistrationPopupVisible(false);
    setIsLoginPopupVisible(false);
    setIsJobFeedVisible(true);
  };

  const handleLoginButtonClick = () => {
    setIsLoginPopupVisible(false);
    setIsJobFeedVisible(true);
  };

  const handleJobFeedClose = () => {
    setIsJobFeedVisible(false);
  };

  return (
    <div className="App">
      <div className="Button-container">
        {!isJobFeedVisible && (
          <>
            <button className="Button" onClick={handleLoginPopupOpen}>
              Login
            </button>
            <button className="Button" onClick={handleRegistrationPopupOpen}>
              Registration
            </button>
          </>
        )}
      </div>

      <Popup isOpen={isLoginPopupVisible} onRequestClose={handleLoginPopupClose} title="Login">
        <Login onLoginButtonClick={handleLoginButtonClick} />
      </Popup>

      <Popup isOpen={isRegistrationPopupVisible} onRequestClose={handleRegistrationPopupClose} title="Registration">
        <Registration onRegisterButtonClick={handleRegisterButtonClick} />
      </Popup>

      {isJobFeedVisible && <JobFeed onClose={handleJobFeedClose} />}
    </div>
  );
}

export default App;




