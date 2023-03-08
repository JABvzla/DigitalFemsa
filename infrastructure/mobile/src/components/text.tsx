import styled from 'styled-components/native';
import { Color, color } from '../styles';

const fontSize = {
  sm: 12,
  m: 14,
  l: 16,
  xl: 20,
  xxl: 32,
};
const fontWeight = {
  sm: '200',
  m: 'normal',
  l: '900',
};

export type FontWeight = keyof typeof fontWeight;
export type FontSize = keyof typeof fontSize;

interface TextProps {
  size?: FontSize;
  color?: Color;
  weight?: FontWeight;
  align?: 'center' | 'auto' | 'justify' | 'left' | 'right';
}
export const Text = styled.Text<TextProps>`
  font-size: ${props => fontSize[props.size || 'm']}px;
  font-weight: ${props => fontWeight[props.weight || 'm']};
  color: ${props => color(props.color || 'black')};
  text-align: ${props => props.align || 'auto'};
`;
