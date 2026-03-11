import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Global magic styles
import App from './App.jsx' // The Shop Logic

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)