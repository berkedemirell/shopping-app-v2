import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataContextProvider } from './context/DataContext.jsx'
import {Analytics} from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
      <Analytics/>
    </DataContextProvider>
  </React.StrictMode>,
)
