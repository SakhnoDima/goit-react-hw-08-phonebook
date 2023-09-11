import React, { useState } from 'react';
import { Button, FormStyle, Input, Label } from './LogInForm.styles';
import { useDispatch } from 'react-redux';
import { operationsAuth } from '../../redux/auth/index';

import { toast } from 'react-toastify';
import { KEY_LS } from 'components/helpers/themtoggle';

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

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(operationsAuth.logIn({ email, password })).unwrap();
    } catch (error) {
      const theme = localStorage.getItem(KEY_LS);
      toast.error(`Something went wrong, try again`, {
        autoClose: 2000,
        theme: `${theme === 'theme-dark' ? 'dark' : 'light'}`,
      });
    }
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
