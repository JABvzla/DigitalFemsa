import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Content = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Loader = () => (
  <Content>
    <ActivityIndicator />
  </Content>
);
