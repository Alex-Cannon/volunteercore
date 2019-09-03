import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import { Link } from 'react-router-dom';
import { ExternalLink as ExLink } from '../../common/ExternalLink/ExternalLink';

import { connect } from 'react-redux';
import PartnerForm from './PartnerForm.js';

import postPartner from '../../utils/services/partner/postPartner';

export const PostPartnerPage = ({ formData }) => {
  const { loading, success, error } = formData;

  return (
    <PageWrapper>
      <h3>Add Partner</h3>
      <p>
        <Link to="/partners">&lt;-- Search Partners</Link>
      </p>
      <PartnerForm
        submitData={postPartner}
        submitText="Add Partner"
        submitClass="btn-info"
      />
      <p>* Request modifications to this form by <ExLink to="https://github.com/CodeForFoco/volunteercore/issues/new">submitting an issue</ExLink>.</p>
      { loading ? <p>Loading...</p>: ''}
      { error ? <p className="text-danger">{error.message}</p>: ''}
      { success ? <p className="text-success">Partner Added!</p>: ''}
    </PageWrapper>
  );
}

const mapStateToProps = state => ({
  formData: state.partnerForm
});

const PostPartnerPageContainer = connect(
  mapStateToProps,
)(PostPartnerPage);

export default PostPartnerPageContainer;