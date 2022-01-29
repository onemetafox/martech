import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import './style/style.bundle.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./config/authConfig";

import store from './store';
import { Provider } from 'react-redux';

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
    <Provider store={store}>
        <MsalProvider instance={msalInstance}>
            <App />
        </MsalProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();