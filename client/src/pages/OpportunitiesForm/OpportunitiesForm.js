import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink as ExLink } from '../../common/ExternalLink/ExternalLink';

import PageWrapper from '../../components/PageWrapper/PageWrapper';

import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

import { postOpportunity } from '../../utils/services/opportunity/postOpportunity';

// Methods (POST / PUT)

export const OpportunitiesForm = ({ method }) => {
  return (
    <PageWrapper>
      <h3>Add Opportunity</h3>
      <p>
        <Link to="/opportunities">&lt;-- Search Opportunities</Link>
      </p>
      <Form onSubmit={method === 'post' ? postOpportunity : ''}>
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
      <p>* Request modifications to this form by <ExLink>submitting an issue</ExLink>.</p>
    </PageWrapper>
  );
}

export default OpportunitiesForm;