import { ReactNode } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Content } from './styled';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Content>{children}</Content>
      </SafeAreaView>
    </ScrollView>
  );
};
