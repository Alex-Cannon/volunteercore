import React from 'react';
import { Redirect } from 'react-router-dom';

// ROUTES
import Signin from '../../pages/Signin/Signin';
import Page404 from '../../pages/Page404/Page404';
import Opportunities from '../../pages/Opportunities/Opportunities';

export default [{
  path: '/',
  component: <Redirect to="/signin"/>
}, {
  path: '/signin',
  component: Signin
}, {
  path: '/opportunities',
  component: Opportunities,
  auth: true // Requires signed-in user
}, {
  component: Page404
}];