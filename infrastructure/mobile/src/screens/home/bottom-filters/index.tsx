import React from 'react';
import { Button, Margin } from '../../../components';
import { ButtonWrapper } from './styled';

const withFilter = true;
export const BottomFilters = () => {
  return (
    <>
      <Margin space="m" />
      <ButtonWrapper>
        {withFilter && (
          <>
            <Button onPress={() => {}} labelSize="sm" label="Ganados" />
            <Margin space="s" />
            <Button onPress={() => {}} labelSize="sm" label="Canjeados" />
          </>
        )}
        {!withFilter && (
          <Button onPress={() => {}} labelSize="l" label="Todos" />
        )}
      </ButtonWrapper>
    </>
  );
};
