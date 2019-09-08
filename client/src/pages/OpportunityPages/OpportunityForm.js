import React from 'react';
import { ExternalLink as ExLink } from '../../common/ExternalLink/ExternalLink';

import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

export const OpportunityForm = ({ formData, setFormData, submitForm }) => {
  return (
    <>
      <Form onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}>
        <Input
          label="Partner / Organization"
          name="partner_name"
          placeholder="Select Partner / Organization"
          required
        />
        <Input
          label="Name"
          name="name"
          required
        />
        <Input
          label="Description"
          name="description"
          required
        />
        <Input
          label="Location Street"
          name="location_street"
        />
        <Input
          label="Location City"
          name="location_city"
        />
        <Input
          label="Location Zip"
          name="location_zip"
        />
        <Input
          label="Tags Eg. 'art', 'children'"
          placeholder="Enter Tags"
          name="tags"
        />
        <Input
          type="submit"
          value="Add Opportunity"
        />  
      </Form>
      <p>* Request modifications to this form by <ExLink to="https://github.com/CodeForFoco/volunteercore/issues/new">submitting an issue</ExLink>.</p>
    </>
  );
}

export default OpportunityForm;