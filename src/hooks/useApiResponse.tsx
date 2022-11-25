import { useEffect, useState } from 'react';
import { ManufacturerProps } from 'src/components/Manufacturers/types';
import { UseApiResponseProps } from './types';

export default function useApiResponse({
    data,
    isLoading
}: UseApiResponseProps) {
    const [results, setResults] = useState<ManufacturerProps[] | any[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);

    useEffect(() => {
        if (data?.items?.length && !isLoading) {
            const uniqueItems = [...new Set([...results, ...data.items])];
            setResults(uniqueItems);
            setTotalCount(uniqueItems.length);
        }
    }, [data.items, isLoading]);

    return { results, totalCount };
}
