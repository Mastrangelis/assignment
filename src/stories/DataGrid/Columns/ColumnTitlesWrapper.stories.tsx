/* eslint-disable react/function-component-definition */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ColumnTitlesWrapper from '@/components/DataGrid/ColumnTitlesWrapper';
import { ColumnOptions } from '@/components/DataGrid/types';

const data = new Array(1).fill({
    col1: '',
    col2: '',
    col3: '',
    col4: ''
});

const cols: ColumnOptions[] = [
    {
        field: 'col1',
        label: 'Column 1',
        width: '160px',
        position: 'end',
        loadingWidth: '160px'
    },
    {
        field: 'col2',
        label: 'Column 2',
        width: '160px',
        position: 'end',
        loadingWidth: '160px'
    },
    {
        field: 'col3',
        label: 'Column 3',
        width: '160px',
        position: 'end',
        loadingWidth: '160px'
    },
    {
        field: 'col4',
        label: 'Column 4',
        width: '160px',
        position: 'end',
        loadingWidth: '160px'
    }
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/DataGrid/Columns',
    component: ColumnTitlesWrapper,
    args: {
        data,
        columns: cols,
        sortBy: 'col1',
        direction: 'asc',
        onSortChange: () => {}
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ColumnTitlesWrapper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition

const Template: ComponentStory<typeof ColumnTitlesWrapper> = ({
    data,
    columns,
    sortBy,
    direction,
    onSortChange
}) => (
    <ColumnTitlesWrapper
        data={data}
        columns={columns}
        sortBy={sortBy}
        direction={direction}
        onSortChange={onSortChange}
    />
);

export const ColumnTitlesWrapperComponent = Template.bind({});
