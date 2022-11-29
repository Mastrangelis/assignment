import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useGetAllManufacturersQuery } from 'src/api/queries';
import useApiError from 'src/hooks/useApiError';
import useApiResponse from 'src/hooks/useApiResponse';
import useCustomLoading from 'src/hooks/useCustomLoading';
import useSorting from 'src/hooks/useSorting';
import DataCounter from '../DataCounter';
import DataGrid from '../DataGrid';
import DataGridWrapper from '../DataGrid/DataGridWrapper';
import { manufacturersTableCols } from './tableColumns';
import { ManufacturerProps, QueryParams } from './types';

export default function Manufacturers() {
    const [query, setQuery] = useState<QueryParams>({ page: 1 });

    const {
        data,
        isError,
        isLoading: isDataLoading
    } = useGetAllManufacturersQuery(query);

    const queryClient = useQueryClient();

    const { isCustomLoading, isLoadingFirstPage, onCustomLoadingChange } =
        useCustomLoading({
            query,
            isLoading: isDataLoading
        });

    useApiError({ isLoading: isDataLoading, isError });

    const { results, totalCount } = useApiResponse({
        data,
        isLoading: isDataLoading
    });

    const { sortedData, onSortChange, sorting } = useSorting({
        data: results as ManufacturerProps[],
        isLoading: isCustomLoading,
        initialSortedColumn: 'Mfr_ID'
    });

    const onLoadMore = () => {
        onCustomLoadingChange(true);
        setQuery((prev: QueryParams) => ({
            page: prev.page + 1
        }));
        queryClient.invalidateQueries(['manufacturers', query]);
    };

    return (
        <div className="w-full px-10 py-2 flex flex-col">
            <DataCounter isLoading={isCustomLoading} totalCount={totalCount} />
            <DataGridWrapper>
                <DataGrid
                    hoveredCells
                    columns={manufacturersTableCols}
                    data={sortedData}
                    isLoading={isCustomLoading}
                    sortBy={sorting.sortBy}
                    direction={sorting.direction}
                    onSortChange={onSortChange}
                    onLoadMore={onLoadMore}
                    isLoadingFirstPage={isLoadingFirstPage}
                />
            </DataGridWrapper>
        </div>
    );
}
