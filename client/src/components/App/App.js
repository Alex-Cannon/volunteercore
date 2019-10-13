import React, { useEffect } from 'react';
import './App.scss';

import history from '../../utils/helpers/history';
import { Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { store } from '../../utils/services/store';
import { setSignInResult, setSignInError } from '../../utils/services/authentication/authActions';

import { getUser } from '../../utils/services/user/getUser';
import { isAuth } from '../../utils/helpers/isAuth';

// COMPONENTS
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Page401 from '../../pages/Page401/Page401';

// ROUTES
import ROUTES from './routes.js';

export const App = ({ user, setSignInResult }) => {
  useEffect(() => {
    if (isAuth(user) || user.error) return;

    // Auto Sign-In users with a session cookie
    getUser()
      .then(({ data }) => {
        if (data) store.dispatch(setSignInResult(data));
        if (!data) store.dispatch(setSignInError({ autoSignIn: true, message: "401 error", response: { status: 401 }}));
      })
      .catch(({ error }) => {
        store.dispatch(setSignInError(error));
      })
  }, []);

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
  setSignInResult
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
