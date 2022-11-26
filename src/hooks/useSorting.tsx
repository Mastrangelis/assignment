import { useMemo, useState } from 'react';
import {
    ManufacturerProps,
    ModelsTableDataProps,
    SortingProps
} from 'src/components/Manufacturers/types';
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

    const sortedData: (ManufacturerProps | ModelsTableDataProps)[] =
        useMemo(() => {
            if (!data || !data.length) {
                return [];
            }

            let sortingFunc = sortStringFunc;

            // ID(s) columns are numbers
            if (sorting.sortBy.split('_')[1] === 'ID') {
                sortingFunc = sortNumberFunc;
            }

            return sortingFunc(data, sorting.sortBy, sorting.direction);
        }, [data, sorting]);

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
