import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

interface PageHeaderProps {
    header: string;
    hasBackIcon?: boolean;
}

export type { LayoutProps, PageHeaderProps };
