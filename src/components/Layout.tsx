import React from 'react';
import styled from 'styled-components';

import { Header, GlobalStyles } from './';
import { Colors } from '../contants/colors';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  height: 600px;
  margin: 0 auto;
  background-color: ${Colors.white};
  padding: 40px;
  position: relative;
`;
