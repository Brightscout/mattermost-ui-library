import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input } from './Input.component';
import { InputProps } from './Input';

export default {
	title: 'Component/Input',
	component: Input,
} as Meta;

const InputTemplate: Story<InputProps> = (args) => <Input {...args} />;

// Default
export const Default = InputTemplate.bind({});
Default.args = {
	label: 'Label',
};

// Largest variant of input
export const LargeSize = InputTemplate.bind({});
LargeSize.args = {
    ...Default.args,
    size: 'lg'
};

// Input with leading Icon
export const InputWithIcon = InputTemplate.bind({});
InputWithIcon.args = {
	label: 'Label',
	iconName: 'Globe',
};

// Input with type
export const InputWithType = InputTemplate.bind({});
InputWithType.args = {
	label: 'Password',
	iconName: 'Lock',
	type: 'password',
};

// Input with value
export const InputWithValue = InputTemplate.bind({});
InputWithValue.args = {
	...InputWithIcon.args,
	value: 'input value',
};

// Read-only Input
export const ReadOnlyInput = InputTemplate.bind({});
ReadOnlyInput.args = {
	label: 'Readonly-Label',
	iconName: 'Globe',
	readOnly: true,
	value: 'input value',
};

// Required Input
export const RequiredInput = InputTemplate.bind({});
RequiredInput.args = {
	label: 'Required',
	iconName: 'Globe',
	required: true,
};

// Input with auto focus
export const InputWithAutoFocus = InputTemplate.bind({});
InputWithAutoFocus.args = {
	...InputWithIcon.args,
	autoFocus: true,
};

// Disabled Input
export const DisabledInput = InputTemplate.bind({});
DisabledInput.args = {
	...InputWithIcon.args,
	value: 'input value',
	disabled: true,
};

// Error Input
export const ErrorInput = InputTemplate.bind({});
ErrorInput.args = {
	...InputWithIcon.args,
	error: 'Input error',
};

// Input with full width
export const FullWidthInput = InputTemplate.bind({});
FullWidthInput.args = {
	...InputWithIcon.args,
	fullWidth: true,
};

// Borderless input
export const BorderlessInput = InputTemplate.bind({});
BorderlessInput.args = {
	...InputWithIcon.args,
	borderLess: true,
};

// Borderless input with error
export const BorderlessInputWithError = InputTemplate.bind({});
BorderlessInputWithError.args = {
	...BorderlessInput.args,
	error: true,
};
