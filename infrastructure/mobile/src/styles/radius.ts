import { css } from 'styled-components/native';

const sizes = {
  M: 10,
  XL: 20,
};

export type RadiusSize = keyof typeof sizes;
export const radius = (size: RadiusSize) => css`border-radius ${sizes[size]}px`;
