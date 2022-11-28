import clsx from 'clsx';
import React from 'react';
import ColumnTitle from './ColumnTitle';
import { ColumnOptions, ColumnTitlesWrapperProps } from './types';

export default function ColumnTitlesWrapper({
    data,
    columns,
    sortBy,
    direction,
    onSortChange
}: ColumnTitlesWrapperProps) {
    return (
        <div
            data-cy="data-grid-table-headers"
            className="flex justify-start items-center sticky top-0 w-full z-50"
        >
            {data?.length > 0 &&
                columns.map((item: ColumnOptions, index) => (
                    <div
                        key={index}
                        style={{
                            width: item.width ?? 'unset',
                            minWidth: item.minWidth ?? item.width,
                            flex: item.width ? 0 : 1
                        }}
                        className={clsx({
                            'flex px-2.5 h-10 border-l bg-alabaster border-b sticky top-0 border-t':
                                true,
                            'border-r': index === columns.length - 1
                        })}
                    >
                        <ColumnTitle
                            title={item.label}
                            disableSort={item.disableSort}
                            disableSorting={
                                !sortBy || !direction || !onSortChange
                            }
                            direction={direction}
                            selected={item.field === sortBy}
                            onClick={() => {
                                if (!item.disableSort && onSortChange) {
                                    onSortChange(item.field);
                                }
                            }}
                            position={item.position}
                        />
                    </div>
                ))}
        </div>
    );
}
