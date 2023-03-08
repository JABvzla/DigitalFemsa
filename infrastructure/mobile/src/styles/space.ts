const spaces = {
  s: '10px',
  m: '20px',
  l: '40px',
  xl: '50px',
};

export type Space = keyof typeof spaces;
export const space = (option: Space) => spaces[option];
