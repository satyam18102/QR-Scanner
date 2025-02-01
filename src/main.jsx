import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Scanner from './Scanner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Scanner />
  </StrictMode>,
)
