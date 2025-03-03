import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='bg-gray-900 min-h-screen text-white'>
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
