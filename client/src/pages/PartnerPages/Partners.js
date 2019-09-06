import React, { useEffect } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SearchBar from '../../components/SearchBar/SearchBar';
import PartnerCard from '../../components/PartnerCard/PartnerCard';
import Pagination from '../../components/Pagination/Pagination';

import queryToObject from '../../utils/helpers/queryToObject';
import getPartners from '../../utils/services/partner/getPartners';

import { store } from '../../utils/services/store';
import { connect } from 'react-redux';
import { setPartnerListQueryData } from '../../utils/services/partner/partnerActions';
const dispatch = store.dispatch;

export const Partners = ({ partnerSearch, setPartnerListQueryData, location }) => {
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
        setValue={(val) => dispatch(setPartnerListQueryData("search", val))}
      />
      {loading ? <p>Loading...</p> : ''}
      {error ? <p>{error.message}</p> : ''}
      {data ? data.items.map((item, i) => {
        return <PartnerCard {...item} key={item.name + i + 'partners'} />
      }) : ''}
      <Pagination nextPageAction={(pageNum) => {
        if (pageNum === options.pageNum) return;
        const newOptions = options;
        newOptions.page = pageNum;
        getPartners(newOptions);
      }}/>
    </PageWrapper>
  )
}

const mapStateToProps = state => ({
  partnerSearch: state.partnerSearch
});

const mapDispatchToProps = () => ({
  setPartnerListQueryData
});

const PartnersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Partners);

export default PartnersContainer;