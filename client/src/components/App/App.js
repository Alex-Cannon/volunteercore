import React, { useEffect } from 'react';
import './App.scss';

import history from '../../utils/helpers/history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { store } from '../../redux/store';
import { authSuccess } from '../../redux/actions';

import { getUser } from '../../utils/services/user/getUser';

// COMPONENTS
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// ROUTES
import Signin from '../../pages/Signin/Signin';
import Page404 from '../../pages/Page404/Page404';
import Opportunities from '../../pages/Opportunities/Opportunities';

function App() {
  // Auto Sign-In users with a session cookie
  useEffect(() => {
    getUser()
      .then(({ data }) => {
        store.dispatch(authSuccess(data));
      });
  });

  return (
    <div className="app-wrapper">
      <Router history={history}>
        <Navbar/>
        <Switch>
          <Route component={() => <Redirect to="/signin"/>} exact path="/"/>
          <Route component={Signin} exact path="/signin"/>
          <Route component={Opportunities} exact path="/opportunities"/>
          <Route component={Page404}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;