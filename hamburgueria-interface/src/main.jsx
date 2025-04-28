import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'


import { Login } from './containers/Login'
import GlobalStyles from './styles/globalstyles'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="dark" />
    <Login />
  </StrictMode>,
)
