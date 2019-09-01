import React, { useEffect } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SearchBar from '../../components/SearchBar/SearchBar';

import getPartners from '../../utils/services/partner/getPartners';

import { store } from '../../redux/store';
import { connect } from 'react-redux';
import { setPartnerSearchField } from '../../redux/actions';
const dispatch = store.dispatch;

export const Partners = ({ partnerSearch, setSearchField }) => {
  const { data, error, loading, options } = partnerSearch;
  
  useEffect(() => {
    if (!data && !error && !loading) {
      getPartners(options);
    }
  });

  return (
    <PageWrapper>
      <h3>Partners</h3>
      <SearchBar
        addLink="/partners/post"
        placeholder="Search Partners"
        onSubmit={(e) => {
          e.preventDefault();
          getPartners(options);
        }}
        value={options.search}
        setValue={(val) => dispatch(setSearchField("search", val))}
      />
      {data ? data.items.map(item => {
        return <p>{item.name}</p>
      }) : ''}
    </PageWrapper>
  )
}

const mapStateToProps = state => ({
  partnerSearch: state.partnerSearch
});

const mapDispatchToProps = () => ({
  setSearchField: setPartnerSearchField
});

const PartnersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Partners);

export default PartnersContainer;