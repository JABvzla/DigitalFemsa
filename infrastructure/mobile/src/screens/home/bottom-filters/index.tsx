import React from 'react';
import { Button, Margin } from '../../../components';
import { TransactionFilter } from '../useHome';
import { ButtonWrapper } from './styled';

interface Props {
  setFilters: (filter: TransactionFilter) => void;
  withFilter: boolean;
}
export const BottomFilters = ({ setFilters, withFilter }: Props) => {
  const filterHandler = (filter: TransactionFilter) => () => setFilters(filter);
  return (
    <>
      <Margin space="m" />
      <ButtonWrapper>
        {!withFilter && (
          <>
            <Button
              onPress={filterHandler('redeemed')}
              labelSize="sm"
              label="Ganados"
            />
            <Margin space="s" />
            <Button
              onPress={filterHandler('available')}
              labelSize="sm"
              label="Canjeados"
            />
          </>
        )}
        {withFilter && (
          <Button onPress={filterHandler('all')} labelSize="l" label="Todos" />
        )}
      </ButtonWrapper>
    </>
  );
};
