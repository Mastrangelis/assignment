import React from 'react';
import ReactDOM from 'react-dom/client';
import { AxiosContextProvider } from './api';

import App from './components/App';
import Toaster from './components/Toaster';

import './styles/globals.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <AxiosContextProvider baseUrl={'https://vpic.nhtsa.dot.gov'}>
            <App />
        </AxiosContextProvider>
        <Toaster />
    </React.StrictMode>
);
