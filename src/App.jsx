import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import RegistrationForm from './components/RegistrationForm';
import Home from './components/Home'; // Adjust the import statement

import './App.css'; // Import the app.css file

function App() {
  return (
    <Router>
      <div>
        <div className="navbar"> {/* Apply the class to style the Navbar */}
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<>
            <div className="page-content">
              <Home />
            </div>
            <h1 className="page-title"></h1>
          </>} />
          <Route path="/contacts" element={<>
            <div className="page-content">
              <Contacts />
            </div>
            <h1 className="page-title">Contacts</h1>
          </>} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
