import React from 'react';
import { Link } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import OpportunityForm from './OpportunityForm';

import putOpportunity from '../../utils/services/opportunity/putOpportunity';

import { setPutOpportunityFormData as setFormData } from '../../utils/services/opportunity/opportunityActions';
import { connect } from 'react-redux';
import { store } from '../../utils/services/store';
const dispatch = store.dispatch;

export const PutOpportunity = ({ opportunity, setFormData }) => {
  const { formData, loading, result, error } = opportunity;

  return (
    <PageWrapper>
      <section>
        <h3>Edit Opportunity</h3>
        <p><Link to="/opportunities">&lt;-- Search Opportunities</Link></p>
        <OpportunityForm
          formData={formData}
          setFormData={(object) => dispatch(setFormData(object))}
          submitForm={() => putOpportunity(formData)}
          submitClass="btn btn-warning"
          submitText="Save Changes"
        />
        {result ? <p className="text-success">Changes Saved</p> : ''}
        {error ? <p className="text-danger">{error.message}</p> : ''}
        {loading ? <p>Saving Changes...</p> : ''}
      </section>
    </PageWrapper>
  );
}

const mapStateToProps = state => ({
  opportunity: state.putOpportunityForm
});

const mapDispatchToProps = () => ({
  setFormData
});

const PutOpportunityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PutOpportunity);

export default PutOpportunityContainer;