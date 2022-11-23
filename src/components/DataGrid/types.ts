/* eslint-disable  no-unused-vars */
/* eslint-disable  no-undef */
type SortingDirection = 'asc' | 'desc';

type RenderCellFunction = (row: object) => React.ReactNode;

type ColumnOptions = {
    field?: string;
    label?: string;
    width?: string;
    minWidth?: string;
    position?: 'start' | 'center' | 'end';
    renderCell?: RenderCellFunction;
    infoIcon?: boolean;
    disableSort?: boolean;
    loadingWidth?: string;
};

export type { SortingDirection, ColumnOptions };
