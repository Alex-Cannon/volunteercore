import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink as ExLink } from '../../common/ExternalLink/ExternalLink';

import PageWrapper from '../../components/PageWrapper/PageWrapper';

import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

import postPartner from '../../utils/services/partner/postPartner';
import putPartner from '../../utils/services/partner/putPartner';

import { store } from '../../redux/store';
import { connect } from 'react-redux';
import { setPartnerFormField } from '../../redux/actions';
const dispatch = store.dispatch;

export const PartnersForm = ({ location, method, partnerForm, setFieldToValue }) => {
  const { loading, success, error } = partnerForm;
  let data = partnerForm;
  data.id = location.params.id;
  console.log(location);

  return (
    <PageWrapper>
      <h3>Add Partner</h3>
      <p>
        <Link to="/partners">&lt;-- Search Partners</Link>
      </p>
      <Form onSubmit={ (e) => {
        e.preventDefault();
        if (method === 'post') postPartner(data);
        if (method === 'put') putPartner(data);
      }}>
        <Input
          label="Partner Name"
          name="name"
          setValue={(val) => dispatch(setFieldToValue("name", val))}
          value={data.name || ""}
        />
        <Input
          type="submit"
          value="Add Partner"
        />
      </Form>
      <p>* Request modifications to this form by <ExLink to="https://github.com/CodeForFoco/volunteercore/issues/new">submitting an issue</ExLink>.</p>
      { loading ? <p>Loading...</p>: ''}
      { error ? <p className="text-danger">{error.message}</p>: ''}
      { success ? <p className="text-success">Partner Added!</p>: ''}
    </PageWrapper>
  );
}

const mapStateToProps = state => ({
  partnerForm: state.partnerForm
});

const mapDispatchToProps = () => ({
  setFieldToValue: setPartnerFormField
});

const PartnersFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PartnersForm);

export default PartnersFormContainer;