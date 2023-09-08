import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { RegisterPageSection, Title } from './RegisterPage.styles';

const RegisterPage = () => {
  return (
    <RegisterPageSection>
      <Title>Refistration Form</Title>
      <RegisterForm />
    </RegisterPageSection>
  );
};

export default RegisterPage;
