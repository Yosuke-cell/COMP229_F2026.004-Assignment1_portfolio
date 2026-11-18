// main.jsx - the entry point. index.html loads this file, and it starts the React app.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Put the <App /> component inside <div id="root"> in index.html
createRoot(document.getElementById('root')).render(
  // StrictMode shows extra warnings during development to help find bugs
  <StrictMode>
    {/* BrowserRouter reads the URL so App.jsx can choose which page to show */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
