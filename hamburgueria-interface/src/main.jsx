import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';

import { router } from './routes';
import AppProvider from './hooks';
import GlobalStyles from './styles/globalstyles';
import stripePromise from './config/stripeConfig';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="dark" />
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
    </AppProvider>
  </StrictMode >,
)
