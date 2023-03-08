const colors = {
  primary: '#334FFA',
  white: '#FFF',
  white100: '#F8F8F8',
  white200: '#9B9898',
  black: '#000',
};

export type Color = keyof typeof colors;
export const color = (option: Color) => colors[option];
