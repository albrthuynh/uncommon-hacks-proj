import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-fuj3ts5ye0n7toqw.us.auth0.com"
    clientId="wWZcMkxu03QXb0dFfIax51TCw61hqRmF"
    authorizationParams={{
      redirect_uri: 'http://localhost:5173/doctor-dashboard'
    }}
  >
    <App />
  </Auth0Provider>,
)
