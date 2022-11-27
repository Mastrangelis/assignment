import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ColumnTitle from '@/components/DataGrid/ColumnTitle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/DataGrid/Columns',
    component: ColumnTitle,
    args: {
        title: 'Column Title Test',
        position: 'end',
        disableSorting: false,
        disableSort: false,
        direction: 'asc',
        selected: true,
        onClick: () => alert('Column header clicked!!')
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ColumnTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition

const Template: ComponentStory<typeof ColumnTitle> = ({
    title,
    disableSort,
    selected,
    position,
    disableSorting,
    onClick
}) => (
    <ColumnTitle
        title={title}
        disableSort={disableSort}
        disableSorting={disableSorting}
        selected={selected}
        position={position}
        onClick={onClick}
    />
);

export const ColumnTitleComponent = Template.bind({});
