import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import GoBackButton from '@/components/Buttons/GoBackButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Buttons',
    component: GoBackButton,
    args: {
        navigate: () => {}
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof GoBackButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof GoBackButton> = ({ navigate }) => (
    <BrowserRouter>
        <GoBackButton navigate={navigate} />
    </BrowserRouter>
);

export const GoBackButtonComponent = Template.bind({});
