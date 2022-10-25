import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Dropdown} from './Dropdown.component';
import {DropdownProps} from './Dropdown';

export default {
    title: 'Component/Dropdown',
    component: Dropdown,
} as Meta<typeof Dropdown>;

const DropdownTemplate: Story<DropdownProps> = (args) => <Dropdown {...args} />;

// Default
export const Default = DropdownTemplate.bind({});
Default.args = {};

export const PassingOptions = DropdownTemplate.bind({});
PassingOptions.args = {
    options: [{label: 'Option 1'}, {label: 'Option 2'}, {label: 'Option 3'}],
};
