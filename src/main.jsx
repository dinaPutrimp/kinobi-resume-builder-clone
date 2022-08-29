import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StepperContextProvider from './contexts/StepperContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StepperContextProvider>
      <App />
    </StepperContextProvider>
  </React.StrictMode>
)
