import React from 'react';
import { Button, Margin } from '../../../components';
import { TransactionFilter } from '../useHome';
import { ButtonWrapper } from './styled';
import { detached } from '../../../helpers/detached';

interface Props {
  setFilters: (filter: TransactionFilter) => void;
  withFilter: boolean;
  loading: boolean;
}
export const BottomFilters = ({ setFilters, withFilter, loading }: Props) => {
  const filterHandler = (filter: TransactionFilter) => () =>
    !loading && detached(() => setFilters(filter));
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
