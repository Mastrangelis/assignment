import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsCellProps, ManufacturerProps } from './types';

export default function DetailsCell({ data }: DetailsCellProps) {
    const manufacturerDetails = data as ManufacturerProps;

    const navigate = useNavigate();

    const onClick = () =>
        navigate({
            pathname: `/makes`,
            search: `?Mfr_ID=${manufacturerDetails.Mfr_ID}&Mfr_Name=${manufacturerDetails.Mfr_Name}&Mfr_CommonName=${manufacturerDetails.Mfr_CommonName}&Country=${manufacturerDetails.Country}`
        });

    return (
        <div
            className="w-full flex items-center justify-center"
            onClick={onClick}
        >
            <img src="/Information.svg" alt="details" height={22} width={22} />
        </div>
    );
}
