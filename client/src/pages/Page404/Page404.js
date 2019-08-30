import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import { Link } from 'react-router-dom';

export default () => {
  return (
    <PageWrapper>
      <section className="text-center">
        <h1>404 Page not found.</h1>
        <p>Sorry, we couldn't find what you were looking for.</p>
        <p>Feel free to <Link to="/signin">Sign in</Link> or <Link to="/opportunities">view opportunities</Link>.</p>
      </section>
    </PageWrapper>
  );
}