import React from 'react'
import ReactDOM from 'react-dom/client'

/* Components */
import { App } from './App'

/* Style */
import '@/assets/scss/main.scss'
import '@fontsource/space-mono' //font

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
