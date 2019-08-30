import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Card from '../../components/Card/Card';
import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

export default () => {
  return (
    <PageWrapper>
      <div className="text-center">
        <h1>Sign in</h1>
        <p>Sign in to access Volunteers For America Opportunities.</p>
      </div>
      <Card>
        <Form>
          <Input
            label="Username"
          />
          <Input
            label="Password"
          />
          <Input
            type="submit"
          />
        </Form>
        <p className="text-center">To Sign up or reset a password, please contact your site administrator.</p>
      </Card>
    </PageWrapper>
  );
}