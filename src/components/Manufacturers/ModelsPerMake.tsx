/* eslint-disable func-names */
/* eslint-disable consistent-return */
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetModelsPerMakeIdMutation } from 'src/api/mutations';
import { useGetMakesByManufacturerIdQuery } from 'src/api/queries';
import useApiError from 'src/hooks/useApiError';
import useApiResponse from 'src/hooks/useApiResponse';
import useSorting from 'src/hooks/useSorting';
import useToaster from 'src/hooks/useToaster';
import DataCounter from '../DataCounter';
import DataGrid from '../DataGrid';
import DataGridWrapper from '../DataGrid/DataGridWrapper';
import { makesTableCols } from './tableColumns';
import {
    ManufacturerProps,
    ModelProps,
    ModelsApiResponseProps,
    ModelsPerMakeProps,
    ModelsStateProps,
    ModelsTableDataProps
} from './types';

export default function ModelsPerMake({
    onManufacturerChange
}: ModelsPerMakeProps) {
    const [modelsState, setModelsState] = useState<ModelsStateProps>({
        models: [],
        isLoading: true,
        totalCount: 0
    });

    const manufacturerState: ManufacturerProps = useLocation().state;

    const { toastError } = useToaster();

    const {
        data: makesPerManufacturer,
        isError: isMakesError,
        isLoading: isMakesLoading
    } = useGetMakesByManufacturerIdQuery({
        manufacturerId: manufacturerState.Mfr_ID || ''
    });

    useApiError({ isLoading: isMakesLoading, isError: isMakesError });

    const { mutateAsync: fetchModelsPerMakeAsync } =
        useGetModelsPerMakeIdMutation();

    useEffect(() => {
        onManufacturerChange(manufacturerState.Mfr_Name);
    }, [manufacturerState.Mfr_Name]);

    const { results: makesResults } = useApiResponse({
        data: makesPerManufacturer,
        isLoading: isMakesLoading
    });

    const makeIds: string[] = useMemo(() => {
        if (!makesResults?.length || isMakesLoading) return [];
        return makesResults.map((elem: any) => elem.Make_ID);
    }, [makesResults, isMakesLoading]);

    useEffect(() => {
        (async function () {
            if (!makeIds?.length) return [];

            const promises = [];
            try {
                for (let i = 0; i < makeIds.length; i += 1) {
                    promises.push(
                        fetchModelsPerMakeAsync({
                            makeId: makeIds[i]
                        })
                    );
                }

                return await Promise.all(promises).then(
                    (responses: ModelsApiResponseProps[]) => {
                        const results: ModelProps[] = responses.reduce(
                            (
                                acc: ModelProps[],
                                { Results }: ModelsApiResponseProps
                            ) => {
                                return acc.concat(Results);
                            },
                            []
                        );

                        setModelsState((prev: ModelsStateProps) => ({
                            ...prev,
                            models: results,
                            isLoading: false,
                            totalCount: results.length
                        }));
                    }
                );
            } catch (e) {
                toastError('Something went wrong. Please try again.');
                setModelsState((prev: ModelsStateProps) => ({
                    ...prev,
                    isLoading: false
                }));
            }
        })();
    }, [makeIds]);

    const tableData: ModelsTableDataProps[] = useMemo(() => {
        if (!modelsState?.models?.length) return [];
        return modelsState?.models.map((model: ModelProps) => ({
            Model_ID: model.Model_ID,
            Model_Name: model.Model_Name,
            Make_ID: model.Make_ID,
            Make_Name: model.Make_Name,
            Mfr_ID: manufacturerState.Mfr_ID,
            Mfr_Name: manufacturerState.Mfr_Name || '-',
            Mfr_CommonName: manufacturerState.Mfr_CommonName || '-',
            Country: manufacturerState.Country || '-'
        }));
    }, [modelsState, manufacturerState]);

    const { sortedData, onSortChange, sorting } = useSorting({
        data: tableData,
        isLoading: modelsState.isLoading,
        initialSortedColumn: 'Model_ID'
    });

    return (
        <div className="w-full px-10 py-2 flex flex-col">
            <DataCounter
                isLoading={modelsState.isLoading}
                totalCount={modelsState.totalCount}
            />
            <DataGridWrapper>
                <DataGrid
                    hoveredCells
                    columns={makesTableCols}
                    data={sortedData}
                    isLoading={modelsState.isLoading}
                    sortBy={sorting.sortBy}
                    direction={sorting.direction}
                    onSortChange={onSortChange}
                />
            </DataGridWrapper>
        </div>
    );
}
