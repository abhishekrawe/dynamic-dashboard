import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-r258ubrzw5fsp4l1.us.auth0.com"
    clientId="Jmu7PI6zT7Hk4FtlpXchxDrq7Q0JGYX3"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <App />
  </Auth0Provider>
);
