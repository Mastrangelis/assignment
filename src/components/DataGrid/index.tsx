/* eslint-disable  no-lone-blocks */
import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { ColumnOptions, SortingDirection } from './types';
import ColumnTitle from './ColumnTitle';

import 'react-loading-skeleton/dist/skeleton.css';
import DefaultMotionDiv from '../DefaultMotionDiv';

interface DataGridProps {
    columns: ColumnOptions[];
    data: Object[];
    direction?: SortingDirection;
    sortBy?: string;
    onSortChange?: CallableFunction;
    onItemSelect?: CallableFunction;
    isLoading?: boolean;
    hoveredCells?: boolean;
    clickedCells?: boolean;
}

export default function DataGrid({
    columns,
    data,
    direction,
    sortBy,
    onSortChange,
    onItemSelect,
    isLoading,
    hoveredCells,
    clickedCells
}: DataGridProps) {
    const [rowIdClicked, setRowIdClicked] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    useEffect(() => {
        setRowIdClicked(null);
    }, [isLoading]);

    const handlerRowClicked = (row: any) => () => {
        if (clickedCells) {
            if (onItemSelect) onItemSelect(row);

            if (rowIdClicked !== row.id) setRowIdClicked(row.id);
            else setRowIdClicked(null);
        }
    };

    const renderCell = useCallback(
        (row: any, column: ColumnOptions, index: number) => {
            if (column.infoIcon && column.renderCell) {
                return (
                    <div
                        key={index}
                        className="flex items-center pl-2.5 h-full"
                    >
                        <img
                            src="/info-icon.svg"
                            alt="Info"
                            height={30}
                            width={30}
                        />
                        {column.renderCell(row)}
                    </div>
                );
            }
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
            <div
                id="datagrid"
                className="table-shadow relative "
                data-cy="data-grid-wrapper"
            >
                <div
                    className="flex justify-start items-center  sticky top-0 w-full z-50"
                    data-cy="data-grid-table-headers-wrapper"
                >
                    {columns.map((item: ColumnOptions, index) => (
                        <div
                            key={index}
                            style={{
                                width: item.width ?? 'unset',
                                minWidth: item.minWidth ?? item.width,
                                flex: item.width ? 0 : 1
                            }}
                            className="flex px-2.5 h-10  border-l bg-alabaster border-b sticky top-0"
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
                <div data-cy="data-grid-row">
                    {data.map((row: any, index) => {
                        return (
                            <div
                                onClick={handlerRowClicked(row)}
                                className="flex justify-start items-center body1 h-[56px] default-transition"
                                key={index}
                            >
                                {columns.map((column, colIndex) => {
                                    {
                                        return (
                                            <div
                                                key={colIndex}
                                                style={{
                                                    width:
                                                        column.width ?? 'unset',
                                                    minWidth:
                                                        column.minWidth ??
                                                        column.width,
                                                    flex: column.width ? 0 : 1
                                                }}
                                                className={clsx({
                                                    'flex px-2.5 items-center h-full border-l border-b bg-white':
                                                        true,
                                                    'bg-alabaster':
                                                        (rowIdClicked ===
                                                            null ||
                                                            rowIdClicked !==
                                                                row.id) &&
                                                        clickedCells,
                                                    'bg-primary-100':
                                                        rowIdClicked === row.id,
                                                    '!bg-blackWhite-200':
                                                        hoveredIndex ===
                                                            index &&
                                                        rowIdClicked !== row.id,
                                                    'cursor-pointer':
                                                        hoveredIndex === index
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
                                                        containerClassName={clsx(
                                                            {
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
                                                            }
                                                        )}
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
                </div>
            </div>
        </DefaultMotionDiv>
    );
}
