import React, { Fragment, ReactNode } from 'react';
import { Header } from './components/Header';
import Footer from './components/Footer';

type RootLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: RootLayoutProps) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};
