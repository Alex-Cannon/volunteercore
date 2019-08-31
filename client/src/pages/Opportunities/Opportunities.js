import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SearchBar from '../../components/SearchBar/SearchBar';

export const Opportunities = () => {
  return (
    <PageWrapper>
      <section className="text-center">
        <h4>Search Opportunities</h4>
        <SearchBar/>
      </section>
    </PageWrapper>
  );
};

export default Opportunities;