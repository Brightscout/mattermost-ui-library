import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Select} from './Select.component';
import {SelectProps} from './Select';

export default {
    title: 'Component/Select',
    component: Select,
    args: {
        label: 'label',
        options: ['Option 1', 'Option 2', 'Option 3'],
    },
} as Meta<typeof Select>;

const SelectTemplate: Story<SelectProps> = (args) => <Select {...args}/>;

// Default
export const Default = SelectTemplate.bind({});
Default.args = {};

// Select with leading icon
export const SelectWithLeadingIcon = SelectTemplate.bind({});
SelectWithLeadingIcon.args = {
    leadingIcon: 'User',
};

// Select with more than 10 options
export const SelectWithMoreThanTenOptions = SelectTemplate.bind({});
SelectWithMoreThanTenOptions.args = {
    options: [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
        'Option 6',
        'Option 7',
        'Option 8',
        'Option 9',
        'Option 10',
        'Option 11',
        'Option 12',
    ],
};

/* eslint-disable no-console */
export const FunctionTrigger = SelectTemplate.bind({});
FunctionTrigger.args = {
    onSelectOptionHandler(_, value) {
        console.dir(_.target);
        console.log(value);
    },
};

export const PassingInOptionsAsObjectWithFunctionTrigger = SelectTemplate.bind(
    {},
);
PassingInOptionsAsObjectWithFunctionTrigger.args = {
    options: [
        {label: 'Label 1', value: 'Value 1'},
        {label: 'Label 2', value: 'Value 2'},
        {label: 'Label 3', value: 'Value 3'},
    ],
    onSelectOptionHandler(_, value) {
        console.dir(_.target);
        console.log(value);
    },
};
