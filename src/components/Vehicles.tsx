import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useGetVehiclesQuery } from 'src/api/queries';
import useToaster from 'src/hooks/useToaster';
import DataGrid from './DataGrid';
import { ColumnOptions } from './DataGrid/types';

export default function Vehicles() {
    const { toastError, toastSuccess } = useToaster();

    const { data, isLoading, isError } = useGetVehiclesQuery();

    useEffect(() => {
        if (!isLoading && isError) {
            toastError('Something went wrong');
        }
        if (!isLoading && !isError) {
            toastSuccess('Data successfully fetched !');
        }
    }, [isLoading, isError]);

    const vehiclesData = useMemo(() => {
        if (!data?.items || isLoading) return [];
        return data.items;
    }, [data.items, isLoading]);

    console.log(data.items);

    const columns: ColumnOptions[] = [
        {
            field: 'Make_ID',
            label: 'Make ID',
            minWidth: '200px',
            loadingWidth: '115px'
        },
        {
            field: 'Make_Name',
            label: 'Make Name',
            minWidth: '200px',
            loadingWidth: '115px'
        },
        {
            field: 'Model_ID',
            label: 'Model ID',
            minWidth: '180px',
            position: 'end',
            loadingWidth: '75px'
        },
        {
            field: 'Model_Name',
            label: 'Model Name',
            minWidth: '120px',
            loadingWidth: '60px'
        },
        {
            label: 'Actions',
            width: '110px',
            disableSort: true
        }
    ];

    return (
        // <div>
        //     <h3 className="text-primary-400">Vehicles</h3>
        //     {vehiclesData?.map((item: any) => (
        //         <div
        //             style={{
        //                 display: 'flex',
        //                 flexDirection: 'column',
        //                 justifyContent: 'center',
        //                 alignItems: 'start',
        //                 marginBottom: 10,
        //                 border: '1px solid red'
        //             }}
        //         >
        //             <span>Make_ID: {item.Make_ID}</span>
        //             <span>Make_Name: {item.Make_Name}</span>
        //             <span>Model_ID: {item.Model_ID}</span>
        //             <span>Model_Name: {item.Model_Name}</span>
        //         </div>
        //     ))}
        // </div>
        <div>
            <DataGrid
                clickedCells={false}
                hoveredCells={false}
                columns={columns}
                data={vehiclesData}
                isLoading={isLoading}
            />
        </div>
    );
}
