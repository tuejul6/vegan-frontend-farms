import React from 'react'
import ReactDOM from 'react-dom'
import HttpsRedirect from 'react-https-redirect'
import App from './App'
import Providers from './Providers'

ReactDOM.render(
  <React.StrictMode>
    <HttpsRedirect>
      <Providers>
        <App />
      </Providers>
    </HttpsRedirect>
  </React.StrictMode>,
  document.getElementById('root'),
)
