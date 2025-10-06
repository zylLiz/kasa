import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

/*import App from './App.jsx'*/ // App.jsx ne sera plus utilisé
import App from './router/AppRouter.jsx' // On importe le routeur à la place
import "./styles/main.scss"; // Import des styles globaux (sass) dans l'application

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
