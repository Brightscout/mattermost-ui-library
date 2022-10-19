import React from 'react';
import {Story, Meta} from '@storybook/react';

import {LinearProgress} from './LinearProgress.component';
import {LinearProgressProps} from './LinearProgress';

export default {
    title: 'Component/LinearProgress',
    component: LinearProgress,
} as Meta;

const LinearProgressTemplate: Story<LinearProgressProps> = (args) => (
    <LinearProgress {...args}/>
);

// Default Linear Progress
export const Default = LinearProgressTemplate.bind({});

// Determinate Linear Progress
export const Determinate = LinearProgressTemplate.bind({});
Determinate.args = {
    determinate: true,
    value: 20,
};

// Linear Progress with color
export const LinearProgressWithColor = LinearProgressTemplate.bind({});
LinearProgressWithColor.args = {
    color: '#e76f51',
};
