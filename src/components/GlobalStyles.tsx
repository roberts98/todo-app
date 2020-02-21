import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Colors } from '../contants/colors';

const GlobalStyle = createGlobalStyle`
  *, *::before, &::after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-color: ${Colors.lightGray};
    font-family: 'Lacquer', sans-serif;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export function GlobalStyles() {
  return <GlobalStyle />;
}
