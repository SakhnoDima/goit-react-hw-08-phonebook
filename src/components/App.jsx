import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { keepTheme } from './helpers/themtoggle';
import { useDispatch, useSelector } from 'react-redux';
import { operationsAuth, selectorsAuth } from 'redux/auth';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import Layout from './Layout';
const Home = lazy(() => import('../Pages/Home/Home'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('Pages/LogInPage/LoginPage'));
const ContactsSection = lazy(() => import('../Pages/ContactsSection'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectorsAuth.getIsRefreshing);

  useEffect(() => {
    dispatch(operationsAuth.refreshUser());
  }, [dispatch]);

  useEffect(() => {
    keepTheme();
  });
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute redirectTo="/contacts">
                <Home />
              </PublicRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsSection />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    )
  );
};
