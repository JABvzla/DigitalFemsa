import styled from 'styled-components/native';
import { space } from '../../../styles';
import { Card, Text } from '../../../components/';

export const Container = styled(Card).attrs({
  radius: 'xl',
  backround: 'primary',
})`
  margin-left: auto;
  margin-right: auto;
  min-width: 280px;
  padding: ${space('m')};
  padding-bottom: ${space('xl')};
  justify-content: center;
  elevation: 10;
  box-shadow: 0px 4px 5px #0005;
`;

export const Title = styled(Text).attrs({
  size: 'l',
  color: 'white',
  weight: 'l',
})``;

export const Total = styled(Text).attrs({
  size: 'xxl',
  color: 'white',
  weight: 'l',
  align: 'center',
})`
  margin-top: ${space('s')};
`;
