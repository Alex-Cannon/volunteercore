import React, { Component } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import { OpportunityCard } from '../../components/OpportunityCard/OpportunityCard';

import { getOpportunities } from '../../utils/services/opportunity/getOpportunities';

import { setOpportunityListQueryData as setQueryData } from '../../utils/services/opportunity/opportunityActions';
import { connect } from 'react-redux';

export class Opportunities extends Component {
  componentDidMount() {
    const { loading, result, error, options } = this.props.opportunityList;

    if (!loading && !result && !error) {
      getOpportunities(options);
    }
  }

  render () {
    const { loading, result, error, options } = this.props.opportunityList;
    const { setQueryData } = this.props;

    return (
      <PageWrapper>
        <section>
          <h3>Opportunities</h3>
          <SearchBar
            addLink="/opportunities/post"
            placeholder="Search Opportunities"
            value={options.search}
            setValue={setQueryData}
          />
          {result ? result.items.map((opportunity, i) => {
            return (
              <OpportunityCard
                key={`opp-${i}-${opportunity.name}`}
                opportunity={opportunity}
              />
            );
          }) : 'No Results'}
          {error ? <p className="text-danger">{error.message}</p> : ''}
          {loading ? <p>Loading Opportunities...</p> : ''}
          <Pagination
            query={this.props.opportunityList}
            nextPageAction={(pageNum) => {
              if (pageNum === options.pageNum) return;
              const newOptions = options;
              newOptions.page = pageNum;
              getOpportunities(newOptions);
          }}/>
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