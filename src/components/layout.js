import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import '../components/_main.scss';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="main" data-is-root-path={isRootPath}>
      <Header />

      <main className="main--l-gap">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
