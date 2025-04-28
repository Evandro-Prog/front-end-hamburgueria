import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { Login } from './containers/Login'
import GlobalStyles from './styles/globalstyles'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Login />
  </StrictMode>,
)
