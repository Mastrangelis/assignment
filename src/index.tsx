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

const BASE_URL = 'https://vpic.nhtsa.dot.gov';

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AxiosContextProvider baseUrl={BASE_URL}>
                <App />
            </AxiosContextProvider>
            <Toaster />
        </BrowserRouter>
    </React.StrictMode>
);
