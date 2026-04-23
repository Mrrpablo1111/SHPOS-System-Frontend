import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SidebarProvider } from './context/SidebarProvider'
import { Provider } from 'react-redux'
import globleSate from './Redux Toolkit/globleState'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <SidebarProvider>
      <Provider  store = {globleSate}>
        <App />
      </Provider>
    </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
)
