import { SortingDirection } from '../DataGrid/types';

interface SortingProps {
    direction: SortingDirection;
    sortBy: string;
}

interface QueryParams {
    page: number;
}

interface VehicleTypeProps {
    IsPrimary: boolean;
    Name: string;
}

interface ManufacturerProps {
    Country: string;
    Mfr_Name: string;
    Mfr_CommonName: string;
    Mfr_ID: number;
    VehicleTypes: VehicleTypeProps[];
}

interface DetailsCellProps {
    data: object;
}

export type { SortingProps, QueryParams, ManufacturerProps, DetailsCellProps };
