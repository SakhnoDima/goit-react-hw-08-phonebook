import React from 'react';
import { LoginPageSection, Title } from './LoginPage.styles';
import LogInForm from 'components/LogInForm/LogInForm';

const LoginPage = () => {
  return (
    <LoginPageSection>
      <Title>Login Form</Title>
      <LogInForm />
    </LoginPageSection>
  );
};

export default LoginPage;
