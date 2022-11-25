import {
    ManufacturerProps,
    QueryParams
} from 'src/components/Manufacturers/types';

interface UseApiErrorProps {
    isLoading: boolean;
    isError: boolean;
}

interface UseSortingProps {
    data: any[];
    isLoading: boolean;
    initialSortedColumn: string;
}

interface DataProps {
    items: ManufacturerProps[] | any[];
    totalCount: number;
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
