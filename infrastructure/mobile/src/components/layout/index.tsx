import React, { ReactNode } from 'react';
import { Content, SafeArea } from './styled';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <SafeArea>
      <Content>{children}</Content>
    </SafeArea>
  );
};
