import React, { useState } from 'react';
import PageHeader from '../Layout/PageHeader';
import ModelsPerMake from './ModelsPerMake';

export default function ModelsPerMakeWrapper() {
    const [manufacturerName, setManufacturerName] = useState<string>('');

    const onManufacturerChange = (name: string) => setManufacturerName(name);

    return (
        <>
            <PageHeader header={`Models for ${manufacturerName}`} hasBackIcon />
            <ModelsPerMake onManufacturerChange={onManufacturerChange} />
        </>
    );
}
