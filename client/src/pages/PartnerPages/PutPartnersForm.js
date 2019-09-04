import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import { Link } from 'react-router-dom';
import { ExternalLink as ExLink } from '../../common/ExternalLink/ExternalLink';

import { connect } from 'react-redux';
import PartnerForm from './PartnerForm.js';

import putPartner from '../../utils/services/partner/putPartner';

export const PutPartnerPage = ({ formData }) => {
  const { loading, success, error } = formData;

  return (
    <PageWrapper>
      <h3>Edit Partner</h3>
      <p>
        <Link to="/partners">&lt;-- Search Partners</Link>
      </p>
      <PartnerForm
        submitData={putPartner}
        submitText="Save Changes"
        submitClass="btn btn-warning"
      />
      <p>* Request modifications to this form by <ExLink to="https://github.com/CodeForFoco/volunteercore/issues/new">submitting an issue</ExLink>.</p>
      { loading ? <p>Loading...</p>: ''}
      { error ? <p className="text-danger">{error.message}</p>: ''}
      { success ? <p className="text-success">Changes Saved!</p>: ''}
    </PageWrapper>
  );
}

const mapStateToProps = state => ({
  formData: state.partnerForm
});

const PutPartnerPageContainer = connect(
  mapStateToProps,
)(PutPartnerPage);

export default PutPartnerPageContainer;