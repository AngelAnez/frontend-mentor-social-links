import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./fonts/static/Inter-Bold.ttf"
import "./fonts/static/Inter-Regular.ttf"
import "./fonts/static/Inter-SemiBold.ttf"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
