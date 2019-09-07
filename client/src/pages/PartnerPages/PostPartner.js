import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import { Link } from 'react-router-dom';
import { ExternalLink as ExLink } from '../../common/ExternalLink/ExternalLink';

import PartnerForm from './PartnerForm.js';

import postPartner from '../../utils/services/partner/postPartner';

import { connect } from 'react-redux';
import { setPostPartnerFormData as setFormData } from '../../utils/services/partner/partnerActions';
import { store } from '../../utils/services/store';
const dispatch = store.dispatch;

export const PostPartnerPage = ({ postPartnerForm, setFormData }) => {
  const { formData, loading, result, error } = postPartnerForm;

  return (
    <PageWrapper>
      <h3>Add Partner</h3>
      <p>
        <Link to="/partners">&lt;-- Search Partners</Link>
      </p>
      <PartnerForm
        formData={formData}
        setFormData={(name, val) => dispatch(setFormData({ [name]: val }))}
        submitData={postPartner}
        submitText="Add Partner"
        submitClass="btn btn-info"
      />
      <p>* Request modifications to this form by <ExLink to="https://github.com/CodeForFoco/volunteercore/issues/new">submitting an issue</ExLink>.</p>
      { loading ? <p>Loading...</p>: ''}
      { error ? <p className="text-danger">{error.message}</p>: ''}
      { result ? <p className="text-success">Partner Added!</p>: ''}
    </PageWrapper>
  );
}

const mapStateToProps = state => ({
  postPartnerForm: state.postPartnerForm
});

const mapDispatchToProps = () => ({
  setFormData
});

const PostPartnerPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPartnerPage);

export default PostPartnerPageContainer;