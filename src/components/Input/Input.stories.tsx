import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Input} from './Input.component';
import {InputProps} from './Input';

export default {
    title: 'Component/Input',
    component: Input,
} as Meta;

const InputTemplate: Story<InputProps> = (args) => <Input {...args}/>;

// Default
export const Default = InputTemplate.bind({});
Default.args = {
    label: 'Label',
};

// Input with leading Icon
export const InputWithIcon = InputTemplate.bind({});
InputWithIcon.args = {
    label: 'Icon-Label',
    iconName: 'Globe',
};

// Input with type
export const InputWithType = InputTemplate.bind({});
InputWithType.args = {
    label: 'Password',
    iconName: 'Lock',
    type: 'password',
};

// Read-only Input
export const ReadOnlyInput = InputTemplate.bind({});
ReadOnlyInput.args = {
    label: 'Readonly-Label',
    iconName: 'Globe',
    readOnly: true,
    value: 'input value',
};

// Input with value
export const InputWithValue = InputTemplate.bind({});
InputWithValue.args = {
    label: 'Label',
    iconName: 'Globe',
    value: 'input value',
};

// Input with auto focus
export const InputWithAutoFocus = InputTemplate.bind({});
InputWithAutoFocus.args = {
    label: 'Label',
    iconName: 'Globe',
    autoFocus: true,
};

// Disabled Input
export const DisabledInput = InputTemplate.bind({});
DisabledInput.args = {
    label: 'Label',
    iconName: 'Globe',
    value: 'input value',
    disabled: true,
};

// Error Input
export const ErrorInput = InputTemplate.bind({});
ErrorInput.args = {
    label: 'Label',
    iconName: 'Globe',
    error: true,
};

// Input with full width
export const FullWidthInput = InputTemplate.bind({});
FullWidthInput.args = {
    label: 'Label',
    iconName: 'Globe',
    fullWidth: true,
};
