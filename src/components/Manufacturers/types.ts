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
interface ManufacturerOverviewProps {
    Country: string;
    Mfr_Name: string;
    Mfr_CommonName: string;
    Mfr_ID: number;
}
interface ManufacturerProps extends ManufacturerOverviewProps {
    VehicleTypes: VehicleTypeProps[];
}

interface MakesProps {
    Make_ID: number;
    Make_Name: string;
    Mfr_Name: string;
}

interface DetailsCellProps {
    data: object;
}

interface ModelsApiResponseProps {
    Count: number;
    Message: string;
    SearchCriteria: string;
    Results: ModelProps[];
}

interface ModelsPerMakeProps {
    onManufacturerChange: CallableFunction;
}

interface ModelProps {
    Model_ID: number;
    Model_Name: string;
    Make_ID: number;
    Make_Name: string;
}
interface ModelsStateProps {
    models: ModelProps[];
    isLoading: boolean;
    totalCount: number;
}

interface ModelsTableDataProps
    extends ModelProps,
        MakesProps,
        ManufacturerOverviewProps {}

export type {
    SortingProps,
    QueryParams,
    ManufacturerProps,
    DetailsCellProps,
    ModelsPerMakeProps,
    ModelsStateProps,
    ModelProps,
    MakesProps,
    ModelsTableDataProps,
    ModelsApiResponseProps
};
