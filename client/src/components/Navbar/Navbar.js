import React from 'react';
import './Navbar.scss';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { signOut } from '../../utils/services/authentication/signout';
import { isAuth } from '../../utils/helpers/isAuth';

export const NavBar = ({ user }) => {
  return (
    <header>
      <nav id="navbar">
        <div className="navbar-content">
          <img src="/voa_logo.ico" alt="Logo"/> Volunteer Core
        </div>
        <div className="navbar-content">
          <Link className="navbar-link" to="/opportunities">Opportunities</Link>
          <Link className="navbar-link" to="/partners">Partners</Link>
          {isAuth(user) ? (
            <span className="navbar-link" onClick={signOut}>Sign Out</span>
          ) : (
            <Link className="navbar-link" to="/signin">Sign in</Link>
          )}
          <Link className="navbar-link" to="/help">Help</Link>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

const SignInContainer = connect(
  mapStateToProps
)(NavBar);

export default SignInContainer;