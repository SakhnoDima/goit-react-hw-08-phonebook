import React from 'react';
import { UserMenuBox, UserName } from './UserMenu.styles';
import { useDispatch, useSelector } from 'react-redux';
import { operationsAuth, selectorsAuth } from 'redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectorsAuth.getUserName);
  return (
    <UserMenuBox>
      <UserName>{userName}</UserName>
      <button onClick={() => dispatch(operationsAuth.logOut())} type="button">
        log out{' '}
      </button>
    </UserMenuBox>
  );
};

export default UserMenu;
