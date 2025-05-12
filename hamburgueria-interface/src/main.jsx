import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';
import GlobalStyles from './styles/globalstyles';
import stripePromise from './config/stripeConfig';
import { standardTheme } from './styles/themes/standard';
import { Router } from './routes';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="dark" />
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
      </AppProvider>
    </ThemeProvider>
  </StrictMode >,
)
