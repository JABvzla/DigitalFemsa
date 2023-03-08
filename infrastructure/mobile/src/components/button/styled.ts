import styled from 'styled-components/native';
import { color, radius, space } from '../../styles';

export const Content = styled.TouchableOpacity`
  ${radius('m')};
  height: ${space('xl')}
  background: ${color('primary')};
  justify-content: center;
  align-items: center;
  flex: 1;
`;
