import React from 'react';
import PageHeader from '../Layout/PageHeader';
import Manufacturers from './Manufacturers';

export default function ManufacturersWrapper() {
    return (
        <>
            <PageHeader header="All Manufacturers" />
            <Manufacturers />
        </>
    );
}
