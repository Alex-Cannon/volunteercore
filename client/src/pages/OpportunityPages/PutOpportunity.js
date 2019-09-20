import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import OpportunityForm from './OpportunityForm';

import getOpportunity from '../../utils/services/opportunity/getOpportunity';
import putOpportunity from '../../utils/services/opportunity/putOpportunity';

import { setPutOpportunityFormData as setFormData, setPutOpportunityError } from '../../utils/services/opportunity/opportunityActions';
import { connect } from 'react-redux';
import { store } from '../../utils/services/store';
const dispatch = store.dispatch;

export const PutOpportunity = ({ opportunity, setFormData, setPutOpportunityError, match }) => {
  const { formData, loading, result, error } = opportunity;

  useEffect(() => {
    getOpportunity(match.params.id)
      .then(({ data }) => dispatch(setFormData(data)))
      .catch((error) => dispatch(setPutOpportunityError(error))
    );
  }, []);

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
  setFormData,
  setPutOpportunityError
});

const PutOpportunityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PutOpportunity);

export default PutOpportunityContainer;