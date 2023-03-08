import styled from 'styled-components/native';
import { Card } from '../../components';
import { color, space } from '../../styles';

export const SafeArea = styled.SafeAreaView`
  background-color: ${color('purple')};
`;
export const Header = styled.View`
  padding: ${space('m')};
`;
export const Footer = styled.View`
  flex-direction: row;
`;
export const ShadowCard = styled(Card).attrs({
  backround: 'white',
  radius: 'xl',
})`
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
