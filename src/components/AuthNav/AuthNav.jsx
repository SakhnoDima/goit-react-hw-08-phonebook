import React from 'react';

import { NavBox, StyledLink } from './AuthNav.styles';

const AuthNav = () => {
  return (
    <NavBox>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </NavBox>
  );
};

export default AuthNav;
