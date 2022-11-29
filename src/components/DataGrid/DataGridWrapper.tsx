import React from 'react';
import DefaultMotionDiv from '../DefaultMotionDiv';
import { DataGridWrapperProps } from './types';

export default function DataGridWrapper({ children }: DataGridWrapperProps) {
    return (
        <div
            className="w-full h-[calc(100vh-180px)] overflow-y-auto pr-2.5 pb-2"
            data-cy="scrollable-div"
        >
            <DefaultMotionDiv divKey="Datagrid">
                <div id="datagrid" className="table-shadow relative">
                    {children}
                </div>
            </DefaultMotionDiv>
        </div>
    );
}
