import React, { useState } from 'react';
import { Button, Margin } from '../../../components';
import { ButtonWrapper } from './styled';

export const BottomFilters = () => {
  const [withFilter, setWithFilter] = useState(true);
  return (
    <>
      <Margin space="m" />
      <ButtonWrapper>
        {withFilter && (
          <>
            <Button onPress={() => { setWithFilter(false)}} labelSize="sm" label="Ganados" />
            <Margin space="s" />
            <Button onPress={() => { setWithFilter(false)}} labelSize="sm" label="Canjeados" />
          </>
        )}
        {!withFilter && (
          <Button onPress={() => { setWithFilter(true)}} labelSize="l" label="Todos" />
        )}
      </ButtonWrapper>
    </>
  );
};
