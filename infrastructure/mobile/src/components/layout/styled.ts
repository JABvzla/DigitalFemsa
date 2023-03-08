import styled from 'styled-components/native';
import { color, space } from '../../styles';

export const SafeArea = styled.SafeAreaView`
  background: ${color('white100')};
`;

export const Content = styled.View`
  padding: ${space('m')};
  width: 100%;
  height: 100%;
`;
