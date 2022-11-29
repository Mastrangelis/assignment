import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsCellProps, ManufacturerProps } from './types';

export default function DetailsCell({ data }: DetailsCellProps) {
    const manufacturerDetails = data as ManufacturerProps;

    const navigate = useNavigate();

    const onClick = () =>
        navigate(`/manufacturers/${manufacturerDetails.Mfr_ID}/models`, {
            state: { ...manufacturerDetails }
        });

    return (
        <div
            data-cy="details-btn"
            className="w-full flex items-center justify-center"
            onClick={onClick}
        >
            <img src="/Information.svg" alt="details" height={22} width={22} />
        </div>
    );
}
