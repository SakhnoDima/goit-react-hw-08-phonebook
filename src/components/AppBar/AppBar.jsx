import React from 'react';
import { Header, StyleLink } from './AppBar.styles';
import { ThemeButton } from 'components/ThemButtton/ThemeButton';
import { useSelector } from 'react-redux';
import { selectorsAuth } from 'redux/auth';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
  const isLogIn = useSelector(selectorsAuth.getIsLoggedIn);
  return (
    <Header>
      <nav>
        <StyleLink to="/">Home</StyleLink>
        {isLogIn && <StyleLink to="/contacts">Contacts</StyleLink>}
      </nav>
      {isLogIn ? <UserMenu /> : <AuthNav />}
      <ThemeButton />
    </Header>
  );
};

export default AppBar;
