import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Button, FormStyle, Input, Label } from './RegistrationForm.styles';
import { useDispatch } from 'react-redux';
import { operationsAuth } from '../../redux/auth/index';
import { KEY_LS } from 'components/helpers/themtoggle';
const theme = localStorage.getItem(KEY_LS);
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

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(
        operationsAuth.register({ name, email, password })
      ).unwrap();
    } catch (error) {
      alert(`Something went wrong, try again`);
      toast.error(error, {
        autoClose: 2000,
        theme: `${theme === 'theme-dark' ? 'dark' : 'light'}`,
      });
      console.log(error);
    }
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
