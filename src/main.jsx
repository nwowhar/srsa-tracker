import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

document.documentElement.style.background = '#0C0D10'
document.body.style.background = '#0C0D10'
document.body.style.margin = '0'
document.body.style.padding = '0'

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
