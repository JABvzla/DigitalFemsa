import styled from 'styled-components/native';
import { Card } from '../../components';
import { color, radius, space } from '../../styles';

export const SafeArea = styled.SafeAreaView`
  background-color: ${color('purple')};
`;
export const Header = styled.View`
  padding: ${space('m')};
`;
export const Footer = styled.View`
  flex-direction: row;
`;
export const Image = styled.Image`
  ${radius('xl')};
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const ShadowCard = styled(Card).attrs({
  backround: 'white',
  radius: 'xl',
})`
  background-color: ${color('white200')};
  overflow: visible;
  height: 250px;
  width: 100%;
  elevation: 10;
  box-shadow: 0px 4px 4px #0005;
  margin-bottom: auto;
`;
export const Content = styled.View`
  flex: 1;
`;
