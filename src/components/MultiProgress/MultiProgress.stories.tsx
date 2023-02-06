import React from 'react';
import {Story, Meta} from '@storybook/react';

import {MultiProgress} from './MultiProgress.component';
import {MultiProgressBarProps} from './MultiProgress';

export default {
    title: ' Component/MultiProgress',
    component: MultiProgress,
} as Meta;

const MultiProgressTemplate: Story<MultiProgressBarProps> = (args) => <MultiProgress {...args}/>;

// Default
export const Default = MultiProgressTemplate.bind({});
Default.args = {
    progressBarConfig: [
        {
            value: 10,
            color: 'green',
        },
        {
            value: 7,
            color: 'blue',
        },
        {
            value: 3,
            color: 'red',
        },
        {
            value: 4,
            color: 'orange',
        },
    ],
};