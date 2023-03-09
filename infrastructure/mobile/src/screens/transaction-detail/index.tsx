import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Button, Layout, Margin, Text } from '../../components';
import { color } from '../../styles';
import { Content, Footer, Header, Image, SafeArea, ShadowCard } from './styled';

export const TransactionDetail = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParams, 'Details'>>();
  const { transaction } = route.params;
  return (
    <Content>
      <StatusBar backgroundColor={color('purple')} barStyle="dark-content" />
      <SafeArea>
        <Header>
          <Margin space="xl" />
          <Text size="xl" weight="l">
            {transaction.product}
          </Text>
        </Header>
      </SafeArea>
      <Layout>
        <ShadowCard>
          <Image source={{ uri: transaction.image }} />
        </ShadowCard>
        <Margin space="m" />
        <Text size="m" color="white200" weight="l">
          Detalles del producto:
        </Text>
        <Margin space="m" />
        <Text size="l" weight="l">
          {transaction.createdAt}
        </Text>
        <Margin space="m" />
        <Text size="m" color="white200" weight="l">
          Con esta compra acumulaste:
        </Text>
        <Margin space="m" />
        <Text size="xl" weight="l">
          {transaction.points.toLocaleString()} puntos
        </Text>
        <Margin space="xl" />
        <Footer>
          <Button onPress={navigation.goBack} label="Aceptar" labelSize="l" />
        </Footer>
      </Layout>
    </Content>
  );
};
