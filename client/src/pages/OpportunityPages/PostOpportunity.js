import React from 'react';
import { Link } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import OpportunityForm from './OpportunityForm';

import postOpportunity from '../../utils/services/opportunity/postOpportunity';

import { setPostOpportunityFormData as setFormData } from '../../utils/services/opportunity/opportunityActions';
import { connect } from 'react-redux';
import { store } from '../../utils/services/store';
const dispatch = store.dispatch;

export const PostOpportunity = ({ opportunity, setFormData }) => {
  const { formData, loading, result, error } = opportunity;

  return (
    <PageWrapper>
      <section>
        <h3>Add Opportunity</h3>
        <p><Link to="/opportunities">&lt;-- Search Opportunities</Link></p>
        <OpportunityForm
          formData={formData}
          setFormData={(object) => dispatch(setFormData(object))}
          submitForm={() => postOpportunity(formData)}
        />
        {result ? result.items.map(item => <p>{item.name}</p>) : ''}
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