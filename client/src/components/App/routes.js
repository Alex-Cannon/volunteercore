import React from 'react';
import { Redirect } from 'react-router-dom';

// ROUTES
import Signin from '../../pages/Signin/Signin';
import Help from '../../pages/Help/Help';
import Page404 from '../../pages/Page404/Page404';
import Opportunities from '../../pages/Opportunities/Opportunities';
import OpportunitiesForm from '../../pages/OpportunityPages/OpportunitiesForm';
import Partners from '../../pages/PartnerPages/Partners';
import PostPartner from '../../pages/PartnerPages/PostPartner';
import PutPartner from '../../pages/PartnerPages/PutPartner';

export default [{
  path: '/',
  component: () => <Redirect to="/signin"/>
}, {
  path: '/signin',
  component: Signin
}, {
  path: '/help',
  component: Help
}, {
  path: '/opportunities',
  component: Opportunities,
  auth: true
}, {
  path: '/opportunities/post',
  component: () => <OpportunitiesForm method="post"/>,
  auth: true
}, {
  path: '/partners',
  component: Partners,
  auth: true
}, {
  path: '/partners/post',
  component: PostPartner,
  auth: true
}, {
  path: '/partners/put/:id',
  component: PutPartner,
  auth: true
}, {
  component: Page404
}];