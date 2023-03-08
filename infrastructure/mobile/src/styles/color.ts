const colors = {
  primary: '#334FFA',
  white: '#FFF',
  white100: '#F8F8F8',
  white200: '#9B9898',
  black: '#000',
  green: '#00B833',
  red: '#F00',
  purple: '#CFD6FF',
};

export type Color = keyof typeof colors;
export const color = (option: Color) => colors[option];
