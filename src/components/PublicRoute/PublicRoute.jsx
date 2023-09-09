import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorsAuth } from 'redux/auth';

const PublicRoute = ({ children, restricted = false, redirectTo }) => {
  const isLoggedIn = useSelector(selectorsAuth.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
