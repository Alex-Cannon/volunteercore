import React, { useEffect } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SearchBar from '../../components/SearchBar/SearchBar';
import PartnerCard from '../../components/PartnerCard/PartnerCard';
import Pagination from '../../components/Pagination/Pagination';

import queryToObject from '../../utils/helpers/queryToObject';
import getPartners from '../../utils/services/partner/getPartners';

import { store } from '../../redux/store';
import { connect } from 'react-redux';
import { setPartnerSearchField } from '../../redux/actions';
const dispatch = store.dispatch;

export const Partners = ({ partnerSearch, setSearchField, location }) => {
  const { data, error, loading } = partnerSearch;
  let { options } = partnerSearch;
  options = { ...options, ...queryToObject(location.search) };
  
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
      {loading ? <p>Loading...</p> : ''}
      {error ? <p>{error.message}</p> : ''}
      {data ? data.items.map((item, i) => {
        return <PartnerCard {...item} key={item.name + i + 'partners'} />
      }) : ''}
      <Pagination {...data} nextPageAction={(pageNum) => {
        dispatch(setSearchField("page", pageNum));
        getPartners(options);
      }}/>
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