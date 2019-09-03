import React from 'react';

import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

import { store } from '../../redux/store';
import { connect } from 'react-redux';
import { setPartnerFormField } from '../../redux/actions';
const dispatch = store.dispatch;

export const PartnerForm = ({ formData, setField, submitData }) => {
  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      submitData();
    }}>
      <Input
        label="Partner Name"
        name="name"
        setValue={(val) => dispatch(setField("name", val))}
        value={formData.name || ""}
      />
      <Input
        className="btn-danger"
        type="submit"
        value="Add Partner"
      />
    </Form>
  );
}

const mapStateToProps = state => ({
  formData: state.partnerForm
});

const mapDispatchToProps = () => ({
  setField: setPartnerFormField
});

const PartnerFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PartnerForm);

export default PartnerFormContainer;