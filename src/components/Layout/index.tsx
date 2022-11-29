import React from 'react';
import { LayoutProps } from './types';

export default function Layout({ children }: LayoutProps) {
    return (
        <div data-cy="layout" className="w-full flex flex-col bg-cornflower">
            {children}
        </div>
    );
}
