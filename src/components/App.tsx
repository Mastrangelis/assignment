import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import ManufacturersWrapper from './Manufacturers/ManufacturersWrapper';
import ModelsPerMakeWrapper from './Manufacturers/ModelsPerMakeWrapper';

const queryClient = new QueryClient();

function App() {
    const navigate = useNavigate();

    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route
                    path="/"
                    element={<ManufacturersWrapper navigate={navigate} />}
                />
                <Route
                    path="/manufacturers/:id/models"
                    element={<ModelsPerMakeWrapper navigate={navigate} />}
                />
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
