import styled from 'styled-components/native';
import { space, Space } from '../styles';

interface MarginProps {
  space: Space;
}

export const Margin = styled.View<MarginProps>`
  margin-top: ${props => space(props.space)};
  margin-right: ${props => space(props.space)};
`;
