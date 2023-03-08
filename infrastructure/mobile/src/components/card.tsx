import styled from 'styled-components/native';
import { color, Color, radius, RadiusSize } from '../styles';

interface CardProps {
  backround: Color;
  radius: RadiusSize;
}
export const Card = styled.View<CardProps>`
  background: ${props => color(props.backround)};
  ${props => radius(props.radius)};
`;
