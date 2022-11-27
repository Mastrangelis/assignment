import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageHeader from '@/components/Layout/PageHeader';
import { BrowserRouter } from 'react-router-dom';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Layout',
    component: PageHeader,
    args: {
        header: 'Page Header',
        hasBackIcon: false
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PageHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof PageHeader> = ({
    header,
    hasBackIcon
}) => (
    <BrowserRouter>
        <PageHeader header={header} hasBackIcon={hasBackIcon} />
    </BrowserRouter>
);

export const PageHeaderomponent = Template.bind({});
