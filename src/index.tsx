import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AxiosContextProvider } from './api';

import App from './components/App';
import Toaster from './components/Toaster';

import './styles/globals.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AxiosContextProvider baseUrl={'https://vpic.nhtsa.dot.gov'}>
                <App />
            </AxiosContextProvider>
            <Toaster />
        </BrowserRouter>
    </React.StrictMode>
);
