import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Button} from './Button.component';
import {ButtonProps} from './Button';

export default {
    title: 'Component/Button',
    component: Button,
} as Meta;

const ButtonTemplate :Story<ButtonProps> = (args) => <Button {...args}/>;

//Default Button
export const Default = ButtonTemplate.bind({});
Default.args = {
    children: 'Button',
};

// Button with icon
export const IconButton = ButtonTemplate.bind({});
IconButton.args = {
    children: 'Button',
    iconName: 'Delete',
};
