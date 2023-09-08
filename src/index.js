import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { store } from '../src/redux/stor';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { GlobalStyle } from './components/styles/GlobalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme.js';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
