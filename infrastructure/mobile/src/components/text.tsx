import styled from 'styled-components/native';
import { Color, color } from '../styles';

const fontSize = {
  sm: 12,
  m: 14,
  l: 16,
};
const fontWeight = {
  sm: '100',
  m: 'normal',
  l: '900',
};

export type FontWeight = keyof typeof fontWeight;
export type FontSize = keyof typeof fontSize;

interface TextProps {
  size?: FontSize;
  color?: Color;
  weight?: FontWeight;
}
export const Text = styled.Text<TextProps>`
  font-size: ${props => fontSize[props.size || 'm']}px;
  font-weight: ${props => fontWeight[props.weight || 'm']};
  color: ${props => color(props.color || 'black')};
`;
