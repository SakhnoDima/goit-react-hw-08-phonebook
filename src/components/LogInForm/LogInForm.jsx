import React, { useState } from 'react';
import { Button, FormStyle, Input, Label } from './LogInForm.styles';
import { useDispatch } from 'react-redux';
import { operationsAuth } from '../../redux/auth/index';

const LogInForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
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
    dispatch(operationsAuth.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormStyle onSubmit={handleSubmit} autoComplete="off">
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
      <Button type="submit">Log In</Button>
    </FormStyle>
  );
};

export default LogInForm;
