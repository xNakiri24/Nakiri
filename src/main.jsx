import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouteContextProvider } from './context/RouteContext.jsx'

createRoot(document.getElementById('root')).render(
  <RouteContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </RouteContextProvider>,
)
