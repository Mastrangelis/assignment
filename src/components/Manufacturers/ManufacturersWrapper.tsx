import React from 'react';
import Layout from '../Layout';
import PageHeader from '../Layout/PageHeader';
import Manufacturers from './Manufacturers';

export default function ManufacturersWrapper() {
    return (
        <Layout>
            <PageHeader header="All Manufacturers" />
            <Manufacturers />
        </Layout>
    );
}
