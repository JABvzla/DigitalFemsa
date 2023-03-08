import styled from 'styled-components/native';
import { space } from '../../styles';
import { Card, Text } from '..';

export const Container = styled(Card).attrs({
  radius: 'xl',
  backround: 'primary',
})`
  padding: ${space('m')};
  padding-bottom: ${space('xl')};
  margin-vertical: ${space('m')};
  justify-content: center;
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
