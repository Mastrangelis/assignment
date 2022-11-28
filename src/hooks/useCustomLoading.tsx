// NOTE!! Custom loading is not something you want in production ofc
// Its just developed for the assignement and only in order to manually delay
// the response from APIs just to demonstrate to you the skeleton loading
// and be able to check the skeleton in cases tha the apis responds really fast.

import { useEffect, useState } from 'react';
import { UseCustomLoadingProps } from './types';

const TIMEOUT = 2000;

export default function useCustomLoading({
    query,
    isLoading
}: UseCustomLoadingProps) {
    const [isCustomLoading, setIsCustomLoading] = useState<boolean>(true);
    const [isLoadingFirstPage, setIsLoadingFirstPage] = useState<boolean>(true);

    const onCustomLoadingChange = (value: boolean) => setIsCustomLoading(value);

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                onCustomLoadingChange(false);
                if (query?.page === 1 && isLoadingFirstPage) {
                    setIsLoadingFirstPage(false);
                }
            }, TIMEOUT);
        }
    }, [isLoading, isLoadingFirstPage, query?.page]);

    return { isCustomLoading, isLoadingFirstPage, onCustomLoadingChange };
}
