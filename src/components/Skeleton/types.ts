import { ReactNode } from 'react';

interface SkeletonWrapperProps {
    children: ReactNode;
    baseColor?: string;
    highlightColor?: string;
    borderRadius?: string;
    duration?: number;
}

export type { SkeletonWrapperProps };
