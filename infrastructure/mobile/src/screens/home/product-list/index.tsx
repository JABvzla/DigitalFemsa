import React from 'react';
import { Margin } from '../../../components/margin';
import { ProductItem } from './product-item';
import { Content, FlatList } from './styled';

interface ProductListProps {}

const DATA_MOCK = [1, 2, 3, 4, 5, 6, 7];
export const ProductList = (_props: ProductListProps) => {
  return (
    <Content>
      <FlatList
        data={DATA_MOCK}
        renderItem={ProductItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Margin space="s" />}
      />
    </Content>
  );
};
