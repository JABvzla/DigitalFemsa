import React from 'react';
import { Container, Title, Total } from './styled';

interface CardTotalProps {
  total: number;
}
export const CardTotal = ({ total }: CardTotalProps) => {
  return (
    <Container>
      <Title>Diciembre</Title>
      <Total>{total.toLocaleString()} pts</Total>
    </Container>
  );
};
