/* eslint-disable  no-lone-blocks */
import React, { useCallback, useState } from 'react';
import clsx from 'clsx';

import Skeleton from 'react-loading-skeleton';

import { ColumnOptions, DataGridProps } from './types';
import ColumnTitle from './ColumnTitle';

import 'react-loading-skeleton/dist/skeleton.css';
import DefaultMotionDiv from '../DefaultMotionDiv';

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

    return (
        <DefaultMotionDiv divKey="Datagrid">
            <div id="datagrid" className="table-shadow relative">
                <div className="flex justify-start items-center sticky top-0 w-full z-50">
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
                                                    column.minWidth ??
                                                    column.width,
                                                flex: column.width ? 0 : 1
                                            }}
                                            className={clsx({
                                                'flex px-2.5 items-center h-full border-l border-b bg-white':
                                                    true,
                                                'border-r':
                                                    colIndex ===
                                                    columns.length - 1,
                                                '!bg-blackWhite-200':
                                                    hoveredIndex === index,
                                                'cursor-pointer':
                                                    hoveredIndex === index,
                                                'justify-end':
                                                    column.position === 'end',
                                                'justify-center':
                                                    column.position ===
                                                    'center',
                                                'justify-start pl-10':
                                                    column.position === 'start'
                                            })}
                                            onMouseEnter={() => {
                                                if (hoveredCells) {
                                                    setHoveredIndex(index);
                                                }
                                            }}
                                            onMouseLeave={() =>
                                                setHoveredIndex(-1)
                                            }
                                        >
                                            {isLoading ? (
                                                <Skeleton
                                                    containerClassName={clsx({
                                                        'flex items-center h-[22px] w-full':
                                                            true,
                                                        'justify-end':
                                                            column.position ===
                                                            'end',
                                                        'justify-center':
                                                            column.position ===
                                                            'center',
                                                        'justify-start pl-10':
                                                            column.position ===
                                                            'start'
                                                    })}
                                                    className="flex items-center h-full"
                                                    style={{
                                                        width: column.loadingWidth
                                                            ? column.loadingWidth
                                                            : 'calc(100% - 40%)'
                                                    }}
                                                />
                                            ) : (
                                                renderCell(
                                                    row,
                                                    column,
                                                    colIndex
                                                )
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
                        <div
                            className="w-full bg-alabaster flex items-center justify-center p-2.5 cursor-pointer border hover:!bg-blackWhite-200"
                            onClick={onLoadMore}
                        >
                            {isLoading ? (
                                <Skeleton containerClassName="flex items-center h-[22px] w-[110px] justify-center" />
                            ) : (
                                <span>Load more</span>
                            )}
                        </div>
                    )}
            </div>
        </DefaultMotionDiv>
    );
}
