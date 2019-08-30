import React from 'react';
import './Navbar.scss';

import { Link } from 'react-router-dom';

export default () => {
  return (
    <header>
      <nav id="navbar">
        <div>
          <h4>Volunteer Core</h4>
        </div>
        <div className="navbar-links">
          <Link to="/opportunities">Opportunities</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/signin">Signin</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
    </header>
  );
}