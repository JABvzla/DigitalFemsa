const colors = {
  primary: '#334FFA',
  white: '#FFF',
  white100: '#CFD6FF',
  white200: '#9B9898',
  black: '#000',
};

export type Color = keyof typeof colors;
export const color = (option: Color) => colors[option];
