import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { AiFillGithub } from 'react-icons/ai';
import { Footer, Wrapper, Link, Main, Text, Loading } from './Layout.styles';

const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Main>
        <Suspense fallback={<Loading>Loading ... </Loading>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <Link href="https://github.com/SakhnoDima">
          <AiFillGithub />
        </Link>
        <Text>&copy; {new Date().getFullYear()} Movie Search </Text>
      </Footer>
    </Wrapper>
  );
};

export default Layout;
