import React from 'react';
import {Story, Meta} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';

import {Spinner} from './Spinner.component';

import {SpinnerProps} from './Spinner';

export default {
    title: 'Component/Spinner',
    component: Spinner,
} as Meta<typeof Spinner>;

const SpinnerTemplate: Story<SpinnerProps> = (args) => <Spinner {...args}/>;

// Default Spinner
export const Default = SpinnerTemplate.bind({});
Default.args = {};

// Spinner with green color and size 2xl
export const SpinnerWithSizeAndColor = SpinnerTemplate.bind({});
SpinnerWithSizeAndColor.args = {
    size: '2xl',
    color: 'green',
};

// Spinner with overlay
export const SpinnerWithOverlay = SpinnerTemplate.bind({});
SpinnerWithOverlay.args = {overlay: true, size: 'xl'};
