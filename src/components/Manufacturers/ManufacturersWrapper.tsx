import React from 'react';
import PageHeader from '../Layout/PageHeader';
import Manufacturers from './Manufacturers';

export default function ManufacturersWrapper() {
    return (
        <React.Fragment>
            <PageHeader header="All Manufacturers" />
            <Manufacturers />
        </React.Fragment>
    );
}
