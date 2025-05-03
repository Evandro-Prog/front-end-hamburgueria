import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import AppProvider from './hooks'
import GlobalStyles from './styles/globalstyles'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>     
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="dark" />
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode >,
)
