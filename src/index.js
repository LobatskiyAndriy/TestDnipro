import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './theme';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <CssBaseline></CssBaseline>
  </ThemeProvider>
  ,
  document.getElementById('root')
);


