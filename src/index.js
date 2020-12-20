import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

import store from './redax/store'
import { Provider } from 'react-redux'

window.storeApp = store;


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>

      <App />
    </Provider>
    <CssBaseline></CssBaseline>
  </ThemeProvider>
  ,
  document.getElementById('root')
);


