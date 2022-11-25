import React, { useState } from 'react';
import Layout from '../Layout';
import PageHeader from '../Layout/PageHeader';
import MakesPerManufacturer from './MakesPerManufacturer';

export default function MakesPerManufacturerWrapper() {
    const [manufacturerName, setManufacturerName] = useState<string>('');

    const onManufacturerChange = (name: string) => setManufacturerName(name);

    return (
        <Layout>
            <PageHeader header={`Makes for ${manufacturerName}`} hasBackIcon />
            <MakesPerManufacturer onManufacturerChange={onManufacturerChange} />
        </Layout>
    );
}
