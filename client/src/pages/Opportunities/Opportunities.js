import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SearchBar from '../../components/SearchBar/SearchBar';

export const Opportunities = () => {
  return (
    <PageWrapper>
      <section>
        <h3>Opportunities</h3>
        <SearchBar/>
        <p>Results</p>
      </section>
    </PageWrapper>
  );
};

export default Opportunities;