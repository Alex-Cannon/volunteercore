import React from 'react';

import { connect } from 'react-redux';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SearchBar from '../../components/SearchBar/SearchBar';

export const Opportunities = ({ opportunities }) => {
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

const mapStateToProps = state => ({
  opportunities: state.opportunities
});

const OpportunitiesContainer = connect(
  mapStateToProps
);

export default OpportunitiesContainer;