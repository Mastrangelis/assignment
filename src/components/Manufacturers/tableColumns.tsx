import { ColumnOptions } from '../DataGrid/types';
import DetailsCell from './DetailsCell';

const manufacturersTableCols: ColumnOptions[] = [
    {
        field: 'Mfr_ID',
        label: 'Manufacturer ID',
        minWidth: '23.75%',
        position: 'end',
        loadingWidth: '160px'
    },
    {
        field: 'Mfr_Name',
        label: 'Manufacturer Name',
        minWidth: '23.75%',
        position: 'end',
        loadingWidth: '320px'
    },
    {
        field: 'Mfr_CommonName',
        label: 'Manufacturer Common Name',
        minWidth: '23.75%',
        position: 'end',
        loadingWidth: '320px'
    },
    {
        field: 'Country',
        label: 'Country',
        minWidth: '23.75%',
        position: 'end',
        loadingWidth: '260px'
    },
    {
        label: 'Details',
        minWidth: '5%',
        position: 'center',
        loadingWidth: '75px',
        disableSort: true,
        renderCell: (row: object) => <DetailsCell data={row} />
    }
];

const makesTableCols: ColumnOptions[] = [
    {
        field: 'Make_ID',
        label: 'Make ID',
        minWidth: '16.66%',
        position: 'end',
        loadingWidth: '160px'
    },
    {
        field: 'Make_Name',
        label: 'Make Name',
        minWidth: '16.66%',
        position: 'end',
        loadingWidth: '160px'
    },
    {
        field: 'Mfr_ID',
        label: 'Manufacturer ID',
        minWidth: '16.66%',
        position: 'end',
        loadingWidth: '160px',
        disableSort: true // No point as long as all values will have the same manufacturer ID
    },
    {
        field: 'Mfr_Name',
        label: 'Manufacturer Name',
        minWidth: '16.66%',
        position: 'end',
        loadingWidth: '320px',
        disableSort: true // No point as long as all values will have the same manufacturer name
    },
    {
        field: 'Mfr_CommonName',
        label: 'Manufacturer Common Name',
        minWidth: '16.66%',
        position: 'end',
        loadingWidth: '320px',
        disableSort: true // No point as long as all values will have the same manufacturer common name
    },
    {
        field: 'Country',
        label: 'Country',
        minWidth: '16.66%',
        position: 'end',
        loadingWidth: '260px',
        disableSort: true // No point as long as all values will have the same manufacturer country
    }
];

export { manufacturersTableCols, makesTableCols };