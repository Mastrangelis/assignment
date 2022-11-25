import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import ManufacturersWrapper from './Manufacturers/ManufacturersWrapper';
import MakesPerManufacturerWrapper from './Manufacturers/MakesPerManufacturerWrapper';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<ManufacturersWrapper />} />
                <Route
                    path="/makes"
                    element={<MakesPerManufacturerWrapper />}
                />
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
