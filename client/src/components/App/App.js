import React from 'react';
import './App.scss';

import history from '../../utils/helpers/history';
import { Router, Route, Redirect } from 'react-router-dom';

// COMPONENTS
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// ROUTES
import Signin from '../../pages/Signin/Signin';
import Page404 from '../../pages/Page404/Page404';

function App() {
  return (
    <div className="app-wrapper">
      <Router history={history}>
        <Navbar/>
        <Route component={() => <Redirect to="/signin"/>} exact path="/"/>
        <Route component={Signin} exact path="/signin"/>
        <Route component={Page404} path="*"/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;