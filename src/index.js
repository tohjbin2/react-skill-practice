import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './utils/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './utils/styles/theme';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
