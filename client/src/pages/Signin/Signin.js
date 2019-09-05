import React from 'react';

import { Redirect } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Card from '../../components/Card/Card';
import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

import { connect } from 'react-redux';
import { setSignInFormData } from '../../utils/services/authentication/authActions';

import { signin } from '../../utils/services/authentication/signin';

export const SignIn = ({ user, setFormData }) => {
  const { formData } = user;
  if (user.result && user.result.id) {
    return <Redirect to="/opportunities"/>;
  }
  
  return (
    <PageWrapper>
      <div className="text-center">
        <h1>Sign in</h1>
        <p>Sign in to access Volunteers For America Opportunities.</p>
      </div>
      <Card>
        <Form onSubmit={(e) => {
          e.preventDefault();
          signin(formData.username, formData.password);
        }}>
          <Input
            label="Username"
            name="username"
            setValue={(username => setFormData({ username }))}
            value={user.username}
          />
          <Input
            label="Password"
            name="password"
            setValue={(password) => setFormData({ password })}
            type="password"
            value={user.password}
          />
          <Input
            type="submit"
            value="Sign In"
          />
        </Form>
        <div className="text-center">
          <p>To Sign up or reset a password, please contact your site administrator.</p>
          { user.loading ? <p>Loading...</p> : '' }
          { user.error && !user.error.autoSignIn ? <p className="text-danger">{(() => {
            const status = user.error.response.status;
            if (status <= 400 && status < 500) {
              return 'Invalid username or password. Please re-enter your username and password and try again.';
            }
            if (status <= 500 && status < 600 ) {
              return 'Internal server error. Please reload the page and try again.';
            }
            return 'Error, please reload the page and try again.';
          })()}</p> : ''}
        </div>
      </Card>
    </PageWrapper>
  );
}

// SignInContainer.js
const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  setFormData: setSignInFormData
};

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default SignInContainer;