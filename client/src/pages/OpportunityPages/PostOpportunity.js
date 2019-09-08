import React from 'react';
import { Link } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import OpportunityForm from './OpportunityForm';

import postOpportunity from '../../utils/services/opportunity/postOpportunity';

import { setPostOpportunityFormData as setFormData } from '../../utils/services/opportunity/opportunityActions';
import { connect } from 'react-redux';

export const PostOpportunity = ({ opportunity, setFormData }) => {
  const { formData, loading, result, error } = opportunity;

  return (
    <PageWrapper>
      <section>
        <h3>Add Opportunity</h3>
        <p><Link to="/opportunities">&lt;-- Search Opportunities</Link></p>
        <OpportunityForm
          formData={formData}
          setFormData={setFormData}
          submitForm={() => postOpportunity(formData)}
        />
        {result ? result.items.map(item => <p>{item.name}</p>) : 'No Results'}
        {error ? <p className="text-danger">{error.message}</p> : ''}
        {loading ? <p>Loading Opportunities...</p> : ''}
      </section>
    </PageWrapper>
  );
}

const mapStateToProps = state => ({
  opportunity: state.postOpportunityForm
});

const mapDispatchToProps = () => ({
  setFormData
});

const PostOpportunityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostOpportunity);

export default PostOpportunityContainer;