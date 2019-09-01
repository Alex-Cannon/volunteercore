import React from 'react';

import { Link } from 'react-router-dom';

import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

import PageWrapper from '../../components/PageWrapper/PageWrapper';


export const PartnersForm = () => {
  return (
    <PageWrapper>
      <h3>Add Partner</h3>
      <p>
        <Link to="/opportunities">&lt;-- Search Opportunities</Link>
      </p>
      <Form>
        <Input
          label="Partner Name"
          name="name"
        />
        <Input
          type="submit"
          value="Add Partner"
        />
      </Form>
    </PageWrapper>
  );
}

export default PartnersForm;