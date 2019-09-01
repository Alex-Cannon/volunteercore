import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SearchBar from '../../components/SearchBar/SearchBar';

export const Partners = () => {
  return (
    <PageWrapper>
      <h3>Partners</h3>
      <SearchBar
        addLink="/partners/post"
        placeholder="Search Partners"
        onSubmit={() => {}}
      />
    </PageWrapper>
  )
}