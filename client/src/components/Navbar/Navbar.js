import React from 'react';
import './Navbar.scss';

import { Link } from 'react-router-dom';

export default () => {
  return (
    <header>
      <nav id="navbar">
        <div className="navbar-content">
          <image src="%PUBLIC_URL%/voa_logo.ico" alt="Logo"/>
          Volunteer Core
        </div>
        <div className="navbar-content">
          <Link to="/opportunities">Opportunities</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/signin">Signin</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
    </header>
  );
}