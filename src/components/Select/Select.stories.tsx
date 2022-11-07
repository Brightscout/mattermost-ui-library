import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Select} from './Select.component';
import {SelectProps} from './Select';

export default {
    title: 'Component/Select',
    component: Select,
    args: {
        label: 'label',
        options: [{value: 'Option 1'}, {value: 'Option 2'}, {value: 'Option 3'}],
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

// Select with options with value and label
export const SelectWithValueAndLabel = SelectTemplate.bind({});
SelectWithValueAndLabel.args = {
    options: [
        {
            value: 'Value 1',
            label: 'Label 1',
        },
        {
            value: 'Value 2',
            label: 'Label 2',
        },
        {
            value: 'Value 3',
            label: 'Label 3',
        },
    ],
};

// Select with more than 10 options
export const SelectWithMoreThan10Options = SelectTemplate.bind({});
SelectWithMoreThan10Options.args = {
    options: [
        {
            value: 'Value 1',
        },
        {
            value: 'Value 2',
        },
        {
            value: 'Value 3',
        },
        {
            value: 'Value 4',
        },
        {
            value: 'Value 5',
        },
        {
            value: 'Value 6',
        },
        {
            value: 'Value 7',
        },
        {
            value: 'Value 8',
        },
        {
            value: 'Value 9',
        },
        {
            value: 'Value 10',
        },
        {
            value: 'Value 11',
        },
        {
            value: 'Value 12',
        },
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

export const PassingInOptionsWithLeadingIcon = SelectTemplate.bind(
    {},
);
PassingInOptionsWithLeadingIcon.args = {
    options: [
        {label: 'Label 1', value: 'Value 1', iconName: 'Edit'},
        {label: 'Label 2', value: 'Value 2', iconName: 'Globe'},
        {label: 'Label 3', value: 'Value 3', iconName: 'MenuDots'},
    ],
    onSelectOptionHandler(_, value) {
        console.dir(_.target);
        console.log(value);
    },
};
