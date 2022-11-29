/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GoBackButton() {
    const navigate = useNavigate();

    return (
        <div
            data-cy="go-back-btn"
            className="mr-2 cursor-pointer"
            onClick={() => navigate(-1)}
        >
            <img
                src="/arrow-line-left.svg"
                alt="Go Back"
                height={42}
                width={42}
            />
        </div>
    );
}
