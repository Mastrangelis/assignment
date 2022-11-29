/* eslint-disable no-unused-vars */
import { MouseEventHandler, ReactNode } from 'react';

type SortingDirection = 'asc' | 'desc';

type Position = 'start' | 'end' | 'center';

type RenderCellFunction = (row: object) => ReactNode;

type ColumnOptions = {
    field?: string;
    label?: string;
    width?: string;
    minWidth?: string;
    position?: Position;
    renderCell?: RenderCellFunction;
    disableSort?: boolean;
    loadingWidth?: string;
};

interface ColumnTitleProps {
    title?: string;
    disableSorting?: boolean;
    direction?: SortingDirection;
    selected: boolean;
    position?: Position;
    disableSort?: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
}

interface DataGridProps {
    columns: ColumnOptions[];
    data: Object[];
    direction?: SortingDirection;
    sortBy?: string;
    onSortChange?: CallableFunction;
    isLoading?: boolean;
    hoveredCells?: boolean;
    isLoadingFirstPage?: boolean;
    onLoadMore?: MouseEventHandler<HTMLDivElement>;
}

interface DataGridWrapperProps {
    children: ReactNode;
}

interface ColumnTitlesWrapperProps {
    data: Object[];
    columns: ColumnOptions[];
    sortBy?: string;
    direction?: SortingDirection;
    onSortChange?: CallableFunction;
}

interface LoadMoreButtonProps {
    isLoading?: boolean;
    onLoadMore?: MouseEventHandler<HTMLDivElement>;
}

export type {
    SortingDirection,
    ColumnOptions,
    ColumnTitleProps,
    DataGridProps,
    DataGridWrapperProps,
    ColumnTitlesWrapperProps,
    LoadMoreButtonProps
};
