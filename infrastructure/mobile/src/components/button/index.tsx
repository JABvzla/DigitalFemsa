import React from 'react';
import { FontSize, Text } from '../text';
import { Content } from './styled';

interface ButtonProps {
  onPress: () => void;
  label: string;
  labelSize: FontSize;
}

export const Button = ({ onPress, label, labelSize }: ButtonProps) => {
  return (
    <Content onPress={onPress}>
      <Text size={labelSize} color="white" weight="l">
        {label}
      </Text>
    </Content>
  );
};
