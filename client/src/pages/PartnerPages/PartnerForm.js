import React from 'react';

import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

export const PartnerForm = ({ formData, setFormData, submitData, submitText, submitClass }) => {
  const data = formData || {};

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      submitData(data);
    }}>
      <Input
        label="Partner Name"
        name="name"
        setValue={(val) => setFormData({name: val})}
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

export default PartnerForm;