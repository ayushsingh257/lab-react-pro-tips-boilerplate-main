import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Kalvium</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/registration">Registration Form</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
