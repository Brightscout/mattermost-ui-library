import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Countdown} from './Countdown.component';
import {CountdownProps} from './Countdown';

export default {
    title: 'Component/Countdown',
    component: Countdown,
} as Meta<typeof Countdown>;

const CountdownTemplate: Story<CountdownProps> = (args) => <Countdown {...args}/>;

// Default
export const Default = CountdownTemplate.bind({});
Default.args = {
    endTime: Date.now() + 172800000, // Today + 2 Days
};

// Custom countdown
export const Custom = CountdownTemplate.bind({});
Custom.args = {
    endTime: Date.now() + 172800000,
    showDays: true,
    showHours: true,
    showMinutes: true,
};
