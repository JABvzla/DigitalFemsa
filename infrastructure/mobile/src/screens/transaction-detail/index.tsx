import React from 'react';
import { StatusBar } from 'react-native';
import { Button, Layout, Margin, Text } from '../../components';
import { color } from '../../styles';
import { Header, SafeArea, ShadowCard, Content, Footer } from './styled';

export const TransactionDetail = () => {
  return (
    <Content>
      <StatusBar backgroundColor={color('purple')} barStyle="dark-content" />
      <SafeArea>
        <Header>
          <Margin space="xl" />
          <Text size="xl" weight="l">
            Nombre del producto
          </Text>
        </Header>
      </SafeArea>
      <Layout>
        <ShadowCard></ShadowCard>
        <Margin space="m" />
        <Text size="m" color="white200" weight="l">
          Detalles del producto:
        </Text>
        <Margin space="m" />
        <Text size="l" weight="l">
          Comprado el 26 de enero, 2019
        </Text>
        <Margin space="m" />
        <Text size="m" color="white200" weight="l">
          Con esta compra acumulaste:
        </Text>
        <Margin space="m" />
        <Text size="xl" weight="l">
          100 puntos
        </Text>
        <Margin space="xl" />
        <Footer>
          <Button onPress={() => {}} label="Aceptar" labelSize="l" />
        </Footer>
      </Layout>
    </Content>
  );
};
