/* eslint-disable  no-lone-blocks */
import React, { useCallback, useState } from 'react';
import clsx from 'clsx';

import Skeleton from 'react-loading-skeleton';

import { ColumnOptions, DataGridProps } from './types';

import 'react-loading-skeleton/dist/skeleton.css';
import ColumnTitlesWrapper from './ColumnTitlesWrapper';
import LoadMoreButton from '../Buttons/LoadMoreButton';

export default function DataGrid({
    columns,
    data,
    direction,
    sortBy,
    onSortChange,
    isLoading,
    hoveredCells,
    onLoadMore,
    isLoadingFirstPage
}: DataGridProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

    const renderCell = useCallback(
        (row: any, column: ColumnOptions, index: number) => {
            return column.renderCell ? (
                column.renderCell(row)
            ) : (
                <div key={index}>
                    {column.field && row[column.field]
                        ? row[column.field]
                        : '-'}
                </div>
            );
        },
        []
    );

    function CellSkeleton({ column }: { column: ColumnOptions }) {
        return (
            <Skeleton
                containerClassName={clsx({
                    'flex items-center h-[22px] w-full': true,
                    'justify-end': column.position === 'end',
                    'justify-center': column.position === 'center',
                    'justify-start pl-10': column.position === 'start'
                })}
                className="flex items-center h-full"
                style={{
                    width: column.loadingWidth
                        ? column.loadingWidth
                        : 'calc(100% - 40%)'
                }}
            />
        );
    }
    return (
        <>
            <ColumnTitlesWrapper
                data={data}
                columns={columns}
                onSortChange={onSortChange}
                sortBy={sortBy}
                direction={direction}
            />

            {data.map((row: any, index) => {
                return (
                    <div
                        className="flex justify-start items-center body1 h-[56px] default-transition"
                        key={index}
                    >
                        {columns.map((column, colIndex) => {
                            {
                                return (
                                    <div
                                        key={colIndex}
                                        style={{
                                            width: column.width ?? 'unset',
                                            minWidth:
                                                column.minWidth ?? column.width,
                                            flex: column.width ? 0 : 1
                                        }}
                                        className={clsx({
                                            'flex px-2.5 items-center h-full border-l border-b bg-white':
                                                true,
                                            'border-r':
                                                colIndex === columns.length - 1,
                                            '!bg-blackWhite-200':
                                                hoveredIndex === index,
                                            'cursor-pointer':
                                                hoveredIndex === index,
                                            'justify-end':
                                                column.position === 'end',
                                            'justify-center':
                                                column.position === 'center',
                                            'justify-start pl-10':
                                                column.position === 'start'
                                        })}
                                        onMouseEnter={() => {
                                            if (hoveredCells) {
                                                setHoveredIndex(index);
                                            }
                                        }}
                                        onMouseLeave={() => setHoveredIndex(-1)}
                                    >
                                        {isLoading ? (
                                            <CellSkeleton column={column} />
                                        ) : (
                                            renderCell(row, column, colIndex)
                                        )}
                                    </div>
                                );
                            }
                        })}
                    </div>
                );
            })}
            {typeof isLoadingFirstPage !== 'undefined' &&
                !isLoadingFirstPage && (
                    <LoadMoreButton
                        isLoading={isLoading}
                        onLoadMore={onLoadMore}
                    />
                )}
        </>
    );
}
