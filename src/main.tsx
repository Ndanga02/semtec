import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  
import App from './App.tsx'
// Temporarily keep these commented out for debugging
// import { analytics } from './lib/analytics'
 import './styles/globals.css'

// Get the root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

// Create root and render app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>  
      <App />
    </BrowserRouter> 
  </React.StrictMode>,
)