import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'



/**
 * 
 * @file fichier racine du projet
 * @author Christelle Philippe
 * @see <a href="https://christelle74.github.io/PhilippeChristelle_11_Kasa/" target="_blank"> repo Git </a>
 */
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
