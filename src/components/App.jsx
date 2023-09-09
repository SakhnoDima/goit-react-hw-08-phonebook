import { Route, Routes } from 'react-router-dom';
import { ContactsSection } from './ContactsSection/ContactsSection';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import Home from 'Pages/Home';
import LoginPage from 'Pages/LogInPage/LoginPage';
import Layout from './Layout';
import { useEffect } from 'react';
import { keepTheme } from './helpers/themtoggle';
import { useDispatch } from 'react-redux';
import { operationsAuth } from 'redux/auth';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationsAuth.refreshUser());
  }, [dispatch]);

  useEffect(() => {
    keepTheme();
  });
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsSection />} />
      </Route>
    </Routes>
  );
};
