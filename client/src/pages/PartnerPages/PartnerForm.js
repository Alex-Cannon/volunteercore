import React from 'react';

import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

import { store } from '../../redux/store';
import { connect } from 'react-redux';
import { setPartnerFormField } from '../../redux/actions';
const dispatch = store.dispatch;

export const PartnerForm = ({ formData, setField, submitData, submitText, submitClass }) => {
  const data = formData && formData.data ? formData.data : {};

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      submitData(data);
    }}>
      <Input
        label="Partner Name"
        name="name"
        setValue={(val) => dispatch(setField("name", val))}
        value={data.name || ""}
      />
      <Input
        inputClass={submitClass}
        type="submit"
        value={submitText || 'Submit'}
      />
    </Form>
  );
}

const mapStateToProps = state => {
  return { formData: state.partnerForm };
}

const mapDispatchToProps = () => {
  return { setField: setPartnerFormField };
}

const PartnerFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PartnerForm);

export default PartnerFormContainer;