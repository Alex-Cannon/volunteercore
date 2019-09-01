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

export const App = ({ user, authSuccess }) => {
  useEffect(() => {
    //alert(JSON.stringify(user));
    if (isAuth(user) || user.error) return;

    // Auto Sign-In users with a session cookie
    getUser()
      .then(({ data }) => {
        if (data) store.dispatch(authSuccess(data));
        if (!data) store.dispatch(authError({ autoSignIn: true, message: "401 error", response: { status: 401 }}));
      })
      .catch(({ error }) => {
        store.dispatch(authError(error));
      })
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
  authSuccess
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;