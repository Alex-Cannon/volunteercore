import React from 'react';
import { Link } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';

import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

import { connect } from 'react-redux';
import { setPartnerFormField } from '../../redux/actions';

import postPartner from '../../utils/services/partner/postPartner';

export const PartnersForm = ({ method, partnerForm, setFieldToValue }) => {
  const { data, loading, success, error } = partnerForm;
  return (
    <PageWrapper>
      <h3>Add Partner</h3>
      <p>
        <Link to="/opportunities">&lt;-- Search Opportunities</Link>
      </p>
      <Form onSubmit={ method === 'post' ? postPartner : ''}>
        <Input
          label="Partner Name"
          name="name"
          setValue={(val) => setFieldToValue("name", val)}
          value={data.name}
        />
        <Input
          type="submit"
          value="Add Partner"
        />
      </Form>
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