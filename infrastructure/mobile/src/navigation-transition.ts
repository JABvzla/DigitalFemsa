import { StackCardStyleInterpolator } from '@react-navigation/stack';

export const forFade: StackCardStyleInterpolator = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
