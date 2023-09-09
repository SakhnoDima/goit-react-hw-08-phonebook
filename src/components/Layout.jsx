import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>Loading ... </p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
