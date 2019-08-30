import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Card from '../../components/Card/Card';
import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

import { connect } from 'react-redux';
import { setUsername, setPassword } from '../../redux/actions';

export const SignIn = ({ user, setUsername, setPassword }) => {
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
            setValue={setUsername}
            value={user.username}
          />
          <Input
            label="Password"
            setValue={setPassword}
            value={user.password}
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

// AppContainer.js
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUsername,
  setPassword,
};

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default SignInContainer;