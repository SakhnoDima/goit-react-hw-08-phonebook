import React, { useState } from 'react';
import { Button, FormStyle, Input, Label } from './RegistrationForm.styles';
import { useDispatch } from 'react-redux';
import { operationsAuth } from '../../redux/auth/index';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(operationsAuth.register({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <FormStyle onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input onChange={handleChange} type="text" name="name" value={name} />
      </Label>
      <Label>
        Email
        <Input
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
        />
      </Label>
      <Label>
        Password
        <Input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
        />
      </Label>
      <Button type="submit">Register</Button>
    </FormStyle>
  );
};

export default RegisterForm;
