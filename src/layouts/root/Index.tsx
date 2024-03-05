import React, { Fragment, ReactNode } from 'react';
import { Header } from './components/Header';

type RootLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: RootLayoutProps) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};
