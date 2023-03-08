import styled from 'styled-components/native';
import { Card, Text } from '../../../components/';
import { color, radius, space } from '../../../styles';

export const Content = styled(Card).attrs({
  backround: 'white',
  radius: 'm',
})`
  width: 100%;
  flex: 1;
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 50 },
})`
  padding: ${space('m')};
`;

export const ProductImage = styled.View`
  ${radius('m')};
  background-color: #ccc;
  width: 45px;
  height: 45px;
  margin-right: ${space('s')};
`;

export const ProductContent = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ProductName = styled(Text).attrs({
  size: 'm',
  weight: 'l',
})``;

export const ProductCreated = styled(Text).attrs({
  size: 'sm',
  weight: 'm',
})``;

export const ProductPoint = styled(Text).attrs({
  size: 'l',
  weight: 'm',
})`
  margin-left: auto;
`;

export const ProductOperation = styled.Text<{ isPlus: boolean }>`
  color: ${({ isPlus }) => color(isPlus ? 'green' : 'red')};
  font-weight: bold;
`;
