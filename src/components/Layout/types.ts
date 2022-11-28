import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

interface PageHeaderProps {
    header: string;
    navigate?: any;
    hasBackIcon?: boolean;
}

export type { LayoutProps, PageHeaderProps };
