import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Switch} from './Switch.component';
import {SwitchProps} from './Switch';

export default {
    title: 'Component/Switch',
    component: Switch,
} as Meta;

const SwitchTemplate: Story<SwitchProps> = (args) => <Switch {...args}/>;

// Default Switch
export const Default = SwitchTemplate.bind({});
Default.args = {
    label: 'Label',
};

// Default Switch with sub-label
export const DefaultWithSubLabel = SwitchTemplate.bind({});
DefaultWithSubLabel.args = {
    label: 'Label',
    subLabel: 'Sub - Label',
};

// Default Switch with overflow sub-label
export const OverflowSubLabel = SwitchTemplate.bind({});
OverflowSubLabel.args = {
    label: 'Label',
    subLabel: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

// Checked Switch
export const Checked = SwitchTemplate.bind({});
Checked.args = {
    label: 'Label',
    checked: true,
};

// Disabled Switch
export const Disabled = SwitchTemplate.bind({});
Disabled.args = {
    label: 'Label',
    disabled: true,
};

// Error Switch
export const Error = SwitchTemplate.bind({});
Error.args = {
    label: 'Label',
    error: true,
};

// Switch with full width
export const FullWidth = SwitchTemplate.bind({});
FullWidth.args = {
    label: 'Label',
    subLabel: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    fullWidth: true,
};
