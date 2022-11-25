import { useMemo, useState } from 'react';
import { SortingProps } from 'src/components/Manufacturers/types';
import { sortNumberFunc, sortStringFunc } from 'src/utils/sort';
import { UseSortingProps } from './types';

export default function useSorting({
    data,
    isLoading,
    initialSortedColumn
}: UseSortingProps) {
    const [sorting, setSorting] = useState<SortingProps>({
        direction: 'asc',
        sortBy: initialSortedColumn
    });

    const sortedData = useMemo(() => {
        if (!data || !data.length) {
            return [];
        }

        let sortingFunc = sortStringFunc;

        if (sorting.sortBy.split('_')[1] === 'ID') {
            sortingFunc = sortNumberFunc;
        }

        return sortingFunc(data, sorting.sortBy, sorting.direction);
    }, [data, isLoading, sorting]);

    const onSortChange = (col: any) => {
        const isSameColumn = col === sorting.sortBy;

        setSorting((prev) => ({
            direction:
                isSameColumn && prev.direction === 'asc' ? 'desc' : 'asc',
            sortBy: col
        }));
    };

    return { sortedData, onSortChange, sorting };
}
