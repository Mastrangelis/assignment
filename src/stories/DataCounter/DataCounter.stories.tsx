import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DataCounter from '../../components/DataCounter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/DataCounter',
    component: DataCounter,
    args: {
        isLoading: true,
        totalCount: 100
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DataCounter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DataCounter> = ({
    isLoading,
    totalCount
}) => <DataCounter isLoading={isLoading} totalCount={totalCount} />;

export const DataCounterComponent = Template.bind({});
