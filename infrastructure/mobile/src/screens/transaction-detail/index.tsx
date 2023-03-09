import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Button, Layout, Margin, Text } from '../../components';
import { color } from '../../styles';
import { Content, Footer, Header, Image, SafeArea, ShadowCard } from './styled';

const AnimatedImage = { borderRadius: 20 };

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
          <SharedElement id={`image.${transaction.id}`}>
            <View style={AnimatedImage}>
              <Image source={{ uri: transaction.image }} resizeMode="stretch" />
            </View>
          </SharedElement>
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
        <SharedElement id={`points.${transaction.id}`}>
          <Text size="xl" weight="l">
            {transaction.points.toLocaleString()} puntos
          </Text>
        </SharedElement>

        <Margin space="xl" />
        <Footer>
          <Button onPress={navigation.goBack} label="Aceptar" labelSize="l" />
        </Footer>
      </Layout>
    </Content>
  );
};
