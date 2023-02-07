import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Button} from './Button.component';
import {ButtonProps} from './Button';

export default {
    title: 'Component/Button',
    component: Button,
} as Meta;

const ButtonTemplate :Story<ButtonProps> = (args) => <Button {...args}>{'Button'}</Button>;

//Default Button
export const Default = ButtonTemplate.bind({});

//Secondary Button
export const SecondaryButton = ButtonTemplate.bind({});
SecondaryButton.args = {
    variant: 'secondary',
};

//Tertiary Button
export const TertiaryButton = ButtonTemplate.bind({});
TertiaryButton.args = {
    variant: 'tertiary',
};

//Quatenary Button
export const QuatenaryButton = ButtonTemplate.bind({});
QuatenaryButton.args = {
    variant: 'quaternary',
};

// text button
export const TextButton = ButtonTemplate.bind({});
TextButton.args = {
    variant: 'text',
};

// Button with icon
export const IconButton = ButtonTemplate.bind({});
IconButton.args = {
    iconName: 'User',
};

// Disabled Button
export const DisabledButton = ButtonTemplate.bind({});
DisabledButton.args = {
    iconName: 'User',
    disabled: true,
};

// Full-width Button
export const FullWidthButton = ButtonTemplate.bind({});
FullWidthButton.args = {
    iconName: 'User',
    fullWidth: true,
};
