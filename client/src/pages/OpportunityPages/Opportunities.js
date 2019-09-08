import React, { Component } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SearchBar from '../../components/SearchBar/SearchBar';

import { getOpportunities } from '../../utils/services/opportunity/getOpportunities';

import { setOpportunityListQueryData as setQueryData } from '../../utils/services/opportunity/opportunityActions';
import { connect } from 'react-redux';

export class Opportunities extends Component {
  componentDidMount() {
    const { loading, result, error, queryData } = this.props.opportunityList;

    if (!loading && !result && !error) {
      getOpportunities(queryData);
    }
  }
  
  render () {
    const { loading, result, error, queryData } = this.props.opportunityList;
    const setQueryData = this.props;

    console.log(this.props.opportunityList);

    return (
      <PageWrapper>
        <section>
          <h3>Opportunities</h3>
          <SearchBar
            addLink="/opportunities/post"
            placeholder="Search Opportunities"
            value={queryData.search}
            setValue={setQueryData}
          />
          {result ? result.items.map(item => <p>{item.name}</p>) : 'No Results'}
          {error ? <p className="text-danger">{error.message}</p> : ''}
          {loading ? <p>Loading Opportunities...</p> : ''}
        </section>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  opportunityList: state.opportunityList
});

const mapDispatchToProps = () => ({
  setQueryData
});

const OpportunitiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Opportunities);

export default OpportunitiesContainer;