import React from 'react';
import GoBackButton from '../Buttons/GoBackButton';
import { PageHeaderProps } from './types';

export default function PageHeader({ header, hasBackIcon }: PageHeaderProps) {
    return (
        <div className="pl-10 pt-5">
            <div className="flex items-center">
                {hasBackIcon && <GoBackButton />}
                <h1 className="text-primary-400">{header}</h1>
            </div>
        </div>
    );
}
