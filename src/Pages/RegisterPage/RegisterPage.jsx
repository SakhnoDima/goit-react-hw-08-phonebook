import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { RegisterPageSection, Title } from './RegisterPage.styles';

const RegisterPage = () => {
  return (
    <RegisterPageSection>
      <Title>Registration Form</Title>
      <RegisterForm />
    </RegisterPageSection>
  );
};

export default RegisterPage;
