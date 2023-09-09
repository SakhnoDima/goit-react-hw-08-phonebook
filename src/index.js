import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { persistor, store } from '../src/redux/stor';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { GlobalStyle } from './components/styles/GlobalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme.js';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </ThemeProvider>
  // </React.StrictMode>
);
