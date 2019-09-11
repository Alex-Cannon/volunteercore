import React from 'react';
import { ExternalLink as ExLink } from '../../common/ExternalLink/ExternalLink';

import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';
import TextArea from '../../common/TextArea/TextArea';
import SearchSelectOne from '../../common/SearchSelectOne/SearchSelectOne';

import getPartners from '../../utils/services/partner/getPartners';

export const OpportunityForm = ({ formData, submitClass, submitText, setFormData, submitForm }) => {
  return (
    <>
      <Form onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}>
        <SearchSelectOne
          asyncGetOptions={getPartners}
          label="Partner"
          placeholder="Search Partners"
          required
          setValue={(val) => setFormData({ partner_name: val })}
          value={formData.partner_name}
        />
        <Input
          label="Name"
          name="name"
          required
          setValue={(val) => setFormData({ name: val })}
        />
        <TextArea
          label="Description"
          placeholder="Enter Description"
          name="description"
          required
          setValue={(val) => setFormData({ description: val })}
        />
        <Input
          label="Location Street"
          name="location_street"
          setValue={(val) => setFormData({ location_street: val })}
        />
        <Input
          label="Location City"
          name="location_city"
          setValue={(val) => setFormData({ location_city: val })}
        />
        <Input
          label="Location Zip"
          name="location_zip"
          setValue={(val) => setFormData({ location_zip: val })}
        />
        <Input
          label="Tags Eg. 'art', 'children'"
          name="tags"
          placeholder="Enter Tags"
          setValue={(val) => setFormData({ tags: val })}
        />
        <Input
          inputClass={submitClass || "input"}
          type="submit"
          value={submitText || "Submit"}
        />  
      </Form>
      <p>* Request modifications to this form by <ExLink to="https://github.com/CodeForFoco/volunteercore/issues/new">submitting an issue</ExLink>.</p>
    </>
  );
}

export default OpportunityForm;