/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { SortingDirection } from 'src/components/DataGrid/types';

const sortStringFunc = (
    data: any[],
    sortBy: string,
    direction: SortingDirection
) => {
    if (direction === 'asc') {
        return [...data].sort((a, b) => {
            if (a[sortBy]) {
                return b[sortBy] ? a[sortBy].localeCompare(b[sortBy]) : -1;
            }
        });
    }
    return [...data].sort((a, b) => {
        if (b[sortBy]) {
            return a[sortBy] ? b[sortBy]?.localeCompare(a[sortBy]) : -1;
        }
    });
};

const sortNumberFunc = (
    data: any[],
    sortBy: string,
    direction: SortingDirection
) => {
    if (direction === 'asc') {
        return [...data].sort(
            (a: any, b: any) => parseFloat(a[sortBy]) - parseFloat(b[sortBy])
        );
    }
    return [...data].sort(
        (a: any, b: any) => parseFloat(b[sortBy]) - parseFloat(a[sortBy])
    );
};

export { sortNumberFunc, sortStringFunc };
