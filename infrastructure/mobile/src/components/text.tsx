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
  size: FontSize;
  color: Color;
  weight: FontWeight;
}
export const Text = styled.Text<TextProps>`
  font-size: ${({ size }) => fontSize[size]}px;
  font-weight: ${({ weight }) => fontWeight[weight]};
  color: ${props => color[props.color]}px;
`;
