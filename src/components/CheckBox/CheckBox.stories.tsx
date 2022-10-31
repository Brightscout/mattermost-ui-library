import React from 'react';
import {Story, Meta} from '@storybook/react';

import {CheckBoxProps} from './CheckBox';
import {Checkbox} from './CheckBox.component';

export default {
    title: 'Component/Checkbox',
    component: Checkbox,
} as Meta;

const CheckboxTemplate:Story<CheckBoxProps> = (args) => <Checkbox {...args}/>;

// Default checkbox
export const Default = CheckboxTemplate.bind({});
Default.args = {
    label: 'Label',
};

// Checked checkbox
export const Checked = CheckboxTemplate.bind({});
Checked.args = {
    label: 'Label',
    checked: true,
};

// Disabled checkbox
export const Disabled = CheckboxTemplate.bind({});
Disabled.args = {
    label: 'Label',
    disabled: true,
};

// Error checkbox
export const Error = CheckboxTemplate.bind({});
Error.args = {
    label: 'Label',
    error: true,
};
