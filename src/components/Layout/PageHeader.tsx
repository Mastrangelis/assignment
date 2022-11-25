import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeaderProps } from './types';

export default function PageHeader({ header, hasBackIcon }: PageHeaderProps) {
    const navigate = useNavigate();

    return (
        <div className="pl-10 pt-5">
            <div className="flex items-center">
                {hasBackIcon && (
                    <div
                        className="mr-2 cursor-pointer"
                        onClick={() => navigate({ pathname: '/' })}
                    >
                        <img
                            src="/arrow-line-left.svg"
                            alt="Go Back"
                            height={42}
                            width={42}
                        />
                    </div>
                )}
                <h1 className="text-primary-400">{header}</h1>
            </div>
        </div>
    );
}
