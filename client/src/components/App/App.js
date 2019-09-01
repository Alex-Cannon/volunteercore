import React, { useEffect } from 'react';
import './App.scss';

import history from '../../utils/helpers/history';
import { Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { store } from '../../redux/store';
import { authSuccess, authError } from '../../redux/actions';

import { getUser } from '../../utils/services/user/getUser';
import { isAuth } from '../../utils/helpers/isAuth';

// COMPONENTS
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Page401 from '../../pages/Page401/Page401';

// ROUTES
import ROUTES from './routes.js';

export const App = ({ user, authSuccess, authError }) => {
  useEffect(() => {
    if (isAuth(user) || authError) return;

    // Auto Sign-In users with a session cookie
    getUser()
      .then(({ data }) => {
        store.dispatch(authSuccess(data));
      });
  });

  const RESOLVED_ROUTES = (() => {
    return ROUTES.map(({path, component, auth}, i) => {
      if (auth) {
        if (!isAuth(user)) {
          return <Route component={Page401} exact key={path + i} path={path}/>;
        }
      }
      return <Route component={component} exact key={path + i} path={path}/>;
    });
  })();

  return (
    <div className="app-wrapper">
      <Router history={history}>
        <Navbar/>
        <Switch>
          {RESOLVED_ROUTES}
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return { user: state.user }
};

const mapDispatchToProps = () => ({
  authSuccess,
  authError
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;