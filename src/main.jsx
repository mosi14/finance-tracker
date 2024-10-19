import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Auth0Provider} from "@auth0/auth0-react";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Auth0Provider
            domain='dev-o4pz4adu1un7zuu6.us.auth0.com'
            clientId='KocQjMh1Cyezw0IGbQeOtKp02pRJqZdh'
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
            cacheLocation="localstorage"
        >
            <App/>
        </Auth0Provider>
    </StrictMode>,
)
