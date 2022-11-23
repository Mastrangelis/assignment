import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import Vehicles from './Vehicles';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Vehicles />
        </QueryClientProvider>
    );
}

export default App;
