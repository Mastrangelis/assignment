import { useEffect } from 'react';
import { UseApiErrorProps } from './types';
import useToaster from './useToaster';

export default function useApiError({ isLoading, isError }: UseApiErrorProps) {
    const { toastError } = useToaster();

    useEffect(() => {
        if (!isLoading && isError) {
            toastError('Something went wrong. Please refresh your page.');
        }
    }, [isLoading, isError]);
}
