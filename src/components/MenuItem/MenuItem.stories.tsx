import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Icon} from '@Components/Icon';

import {MenuItem} from './MenuItem.component';
import {MenuItemProps} from './MenuItem';

export default {
    title: 'Component/MenuItem',
    component: MenuItem,
} as Meta<typeof MenuItem>;

const MenuItemTemplate: Story<MenuItemProps> = (args) => <MenuItem {...args}/>;

// Default
export const Default = MenuItemTemplate.bind({});
Default.args = {
    label: 'Main Label',
};

export const MenuItemWithSecondaryLabel = MenuItemTemplate.bind({});
MenuItemWithSecondaryLabel.args = {
    label: 'Main Label',
    secondaryLabel: '@Secondary Label',
};

export const MenuItemWithLeadingElementAndInlineSecondaryLabel = MenuItemTemplate.bind({});
MenuItemWithLeadingElementAndInlineSecondaryLabel.args = {
    label: 'Main Label',
    secondaryLabel: '@Secondary label',
    secondaryLabelPosition: 'inline',
    leadingElement:
    <Icon
        name='Edit'
        size={12}
    />,
};

export const MenuItemWithLeadingAndTrailingElement = MenuItemTemplate.bind({});
MenuItemWithLeadingAndTrailingElement.args = {
    label: 'Main Label',
    secondaryLabel: '@Secondary Label',
    leadingElement:
    <Icon
        name='Edit'
        size={12}
    />,
    trailingElement:
    <Icon
        name='Delete'
        size={12}
    />,
};
