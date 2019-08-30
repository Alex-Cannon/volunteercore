import React from 'react';
import './App.scss';

import history from '../../utils/helpers/history';
import { Router, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { activateGeod, closeGeod } from '../../redux/actions';

// COMPONENTS
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// ROUTES
import Signin from '../../pages/Signin/Signin';

function App() {
  return (
    <div className="app-wrapper">
      <Router history={history}>
        <Navbar/>
        <Route component={() => <Redirect to="/signin"/>} exact path="/"/>
        <Route component={Signin} exact path="/signin"/>
        <Footer/>
      </Router>
    </div>
  );
}

// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;