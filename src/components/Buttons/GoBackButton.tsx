import React from 'react';

export default function GoBackButton({ navigate }: { navigate: any }) {
    return (
        <div
            data-testid="go-back-wrapper"
            className="mr-2 cursor-pointer"
            onClick={() => navigate('/')}
        >
            <img
                src="/arrow-line-left.svg"
                alt="Go Back"
                height={42}
                width={42}
                data-testid="go-back-icon"
            />
        </div>
    );
}
