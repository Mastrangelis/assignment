import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetMakesByManufacturerIdQuery } from 'src/api/queries';
import useApiError from 'src/hooks/useApiError';
import useApiResponse from 'src/hooks/useApiResponse';
import useCustomLoading from 'src/hooks/useCustomLoading';
import useSorting from 'src/hooks/useSorting';
import DataCounter from '../DataCounter';
import DataGrid from '../DataGrid';
import DataGridWrapper from '../DataGrid/DataGridWrapper';
import { makesTableCols } from './tableColumns';

export default function MakesPerManufacturer({
    onManufacturerChange
}: {
    onManufacturerChange: CallableFunction;
}) {
    const search = useLocation().search;
    const Mfr_ID = new URLSearchParams(search).get('Mfr_ID');
    const Mfr_CommonName = new URLSearchParams(search).get('Mfr_CommonName');
    const Country = new URLSearchParams(search).get('Country');
    const Mfr_Name = new URLSearchParams(search).get('Mfr_Name');

    const {
        data,
        isError,
        isLoading: isDataLoading
    } = useGetMakesByManufacturerIdQuery({
        manufacturerId: Mfr_ID || ''
    });

    useEffect(() => onManufacturerChange(Mfr_Name), [Mfr_Name]);

    const { isCustomLoading } = useCustomLoading({
        isLoading: isDataLoading
    });

    useApiError({ isLoading: isDataLoading, isError });

    const { results, totalCount } = useApiResponse({
        data: data as any,
        isLoading: isDataLoading
    });

    const tableData = useMemo(() => {
        if (!results?.length || isCustomLoading) return [];
        return results.map((elem: any) => ({
            Mfr_ID,
            Mfr_Name,
            Mfr_CommonName,
            Country,
            Make_ID: elem.Make_ID,
            Make_Name: elem.Make_Name
        }));
    }, [results, isCustomLoading]);

    const { sortedData, onSortChange, sorting } = useSorting({
        data: tableData,
        isLoading: isCustomLoading,
        initialSortedColumn: 'Make_ID'
    });

    return (
        <div className="w-full px-10 py-2 flex flex-col">
            <DataCounter isLoading={isCustomLoading} totalCount={totalCount} />
            <DataGridWrapper>
                <DataGrid
                    hoveredCells={true}
                    columns={makesTableCols}
                    data={sortedData}
                    isLoading={isCustomLoading}
                    sortBy={sorting.sortBy}
                    direction={sorting.direction}
                    onSortChange={onSortChange}
                />
            </DataGridWrapper>
        </div>
    );
}
