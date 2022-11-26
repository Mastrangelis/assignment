import {
    MakesProps,
    ManufacturerProps,
    ModelsTableDataProps,
    QueryParams
} from 'src/components/Manufacturers/types';

interface UseApiErrorProps {
    isLoading: boolean;
    isError: boolean;
}

interface UseSortingProps {
    data: (ManufacturerProps | ModelsTableDataProps)[];
    isLoading: boolean;
    initialSortedColumn: string;
}

interface DataProps {
    items: ManufacturerProps[] | MakesProps[];
}

interface UseApiResponseProps {
    data: DataProps;
    isLoading: boolean;
}

interface UseCustomLoadingProps {
    query?: QueryParams;
    isLoading: boolean;
}

export type {
    UseApiErrorProps,
    UseSortingProps,
    UseApiResponseProps,
    UseCustomLoadingProps
};
