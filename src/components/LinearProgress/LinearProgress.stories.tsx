import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LinearProgress } from './LinearProgress.component';
import { LinearProgressProps } from './LinearProgress';

export default {
	title: 'Component/LinearProgress',
	component: LinearProgress,
	argTypes: {
		value: {
			control: { type: 'range', min: 0, max: 100 },
		},
	},
} as Meta;

const LinearProgressTemplate: Story<LinearProgressProps> = (args) => (
	<LinearProgress {...args} />
);

// Default
export const Default = LinearProgressTemplate.bind({});

// Determinate linear progress
export const Determinate = LinearProgressTemplate.bind({});
Determinate.args = {
	determinate: true,
	value: 20,
};

// Linear progress with color
export const LinearProgressWithColor = LinearProgressTemplate.bind({});
LinearProgressWithColor.args = {
	color: '#e76f51',
};
