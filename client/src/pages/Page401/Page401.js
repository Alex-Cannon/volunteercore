import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import { Link } from 'react-router-dom';

export default () => {
  return (
    <PageWrapper>
      <section className="text-center">
        <h1>401 Not Authorized.</h1>
        <p>Sorry, you are not authorized to access this page.</p>
        <p>Please <Link to="/signin">Sign in</Link> or contact your site administrator to access this page.</p>
      </section>
    </PageWrapper>
  );
}