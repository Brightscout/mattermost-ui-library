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
    endTime: 1676007000000, // 2023/02/10 11:00
};

// Custom countdown
export const Custom = CountdownTemplate.bind({});
Custom.args = {
    endTime: 1676007000000, // 2023/02/10 11:00
    showDays: true,
    showHours: true,
    showMinutes: true,
};

