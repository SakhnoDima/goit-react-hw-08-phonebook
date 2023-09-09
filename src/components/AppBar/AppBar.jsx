import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from './AppBar.styles';
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
        <NavLink to="/">Home</NavLink>
        {isLogIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
      {isLogIn ? <UserMenu /> : <AuthNav />}
      <ThemeButton />
    </Header>
  );
};

export default AppBar;
