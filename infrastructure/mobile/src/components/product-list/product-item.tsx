import React from 'react';
import { View } from 'react-native';
import {
  ProductContent,
  ProductCreated,
  ProductImage,
  ProductName,
  ProductOperation,
  ProductPoint,
} from './styled';

export const ProductItem = () => (
  <ProductContent>
    <ProductImage />
    <View>
      <ProductName>Nombre del producto</ProductName>
      <ProductCreated>26 enero, 2019</ProductCreated>
    </View>
    <ProductPoint>
      <ProductOperation isPlus>+</ProductOperation>100 {'>'}
    </ProductPoint>
  </ProductContent>
);
