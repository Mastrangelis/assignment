import React from 'react';

export default function GoBackButton({ navigate }: { navigate: any }) {
    return (
        <div
            data-cy="go-back-btn"
            className="mr-2 cursor-pointer"
            onClick={() => navigate('/')}
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
