import React, { useState } from 'react';
import {Story, Meta} from '@storybook/react';

import {TextArea} from './TextArea.component';
import {TextAreaProps} from './TextArea';

export default {
    title: 'Component/TextArea',
    component: TextArea,
    args: {
        label: 'Address',
    },
    argTypes: {
        value: {
            control: 'text',
        },
    },
} as Meta<TextAreaProps>;

const TextAreaTemplate: Story<Omit<TextAreaProps, 'value' | 'onChange'>> = (args) => {
    const [value, setValue] = useState('')

    return (
        <TextArea 
            {...args}
            value={value} 
            onChange={(event) => {
                setValue(event.target.value)
            }} 
        />
    )
};

// Default
export const Default = TextAreaTemplate.bind({});

// Error state
export const ErrorState = TextAreaTemplate.bind({});
ErrorState.args = {
    error: true,
};

// Readonly state
export const ReadOnlyState = TextAreaTemplate.bind({});
ReadOnlyState.args = {
    readOnly: true,
};

// Disabled state
export const DisabledState = TextAreaTemplate.bind({});
DisabledState.args = {
    disabled: true,
};

// Required state
export const RequiredState = TextAreaTemplate.bind({});
RequiredState.args = {
    required: true,
};

// Autofocus on first mount
export const AutoFocus = TextAreaTemplate.bind({});
AutoFocus.args = {
    autoFocus: true,
};

// Custom umber of rows to occupy
export const CustomRows = TextAreaTemplate.bind({});
CustomRows.args = {
    rows: 10,
};
