import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoadMoreButton from '@/components/Buttons/LoadMoreButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Buttons',
    component: LoadMoreButton,
    args: {
        isLoading: false,
        onLoadMore: () => alert('On load more callback clicked')
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LoadMoreButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof LoadMoreButton> = ({
    onLoadMore,
    isLoading
}) => <LoadMoreButton onLoadMore={onLoadMore} isLoading={isLoading} />;

export const OnLoadMoreButtonComponent = Template.bind({});
