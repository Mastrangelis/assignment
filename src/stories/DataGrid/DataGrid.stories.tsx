import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ColumnOptions } from '@/components/DataGrid/types';
import DataGrid from '@/components/DataGrid';

const data = new Array(5).fill({}).map((_, index) => ({
    col1: `row ${index + 1} col1 test`,
    col2: `row ${index + 1} col2 test`,
    col3: `row ${index + 1} col3 test`,
    col4: `row ${index + 1} col4 test`,
    col5: `row ${index + 1} col5 test`,
    col6: `row ${index + 1} col6 test`,
    col7: `row ${index + 1} col7 test`,
    col8: `row ${index + 1} col8 test`
}));

const cols: ColumnOptions[] = new Array(8).fill({}).map((_, index) => ({
    field: `col${index + 1}`,
    label: `Column ${index + 1}`,
    width: '160px',
    position: 'end',
    loadingWidth: '160px'
}));

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/DataGrid',
    component: DataGrid,
    args: {
        data,
        columns: cols,
        isLoading: false,
        isLoadingFirstPage: true,
        hoveredCells: true,
        onLoadMore: () => alert('On load more clicked !'),
        sortBy: 'col1',
        direction: 'asc',
        onSortChange: () => {}
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DataGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition

const Template: ComponentStory<typeof DataGrid> = ({
    data,
    columns,
    sortBy,
    direction,
    onSortChange,
    isLoading,
    isLoadingFirstPage,
    hoveredCells,
    onLoadMore
}) => (
    <DataGrid
        data={data}
        columns={columns}
        isLoading={isLoading}
        isLoadingFirstPage={isLoadingFirstPage}
        hoveredCells={hoveredCells}
        onLoadMore={onLoadMore}
        sortBy={sortBy}
        direction={direction}
        onSortChange={onSortChange}
    />
);

export const DataGridComponent = Template.bind({});
