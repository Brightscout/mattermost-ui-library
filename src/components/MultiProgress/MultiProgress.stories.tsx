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
            key: 0,
            value: 10,
            color: 'green',
        },
        {
            key: 1,
            value: 7,
            color: 'blue',
        },
        {
            key: 2,
            value: 3,
            color: 'red',
        },
        {
            key: 3,
            value: 4,
            color: 'orange',
        },
    ],
};
