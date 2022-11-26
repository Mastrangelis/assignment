import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import ManufacturersWrapper from './Manufacturers/ManufacturersWrapper';
import ModelsPerMakeWrapper from './Manufacturers/ModelsPerMakeWrapper';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<ManufacturersWrapper />} />
                <Route
                    path="/manufacturers/:id/models"
                    element={<ModelsPerMakeWrapper />}
                />
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
