import React from 'react';
import {Story, Meta} from '@storybook/react';

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

export const MenuItemWithLeadingIconAndInlineSecondaryLabel = MenuItemTemplate.bind({});
MenuItemWithLeadingIconAndInlineSecondaryLabel.args = {
    label: 'Main Label',
    secondaryLabel: '@Secondary label',
    secondaryLabelPosition: 'inline',
    leadingIcon: 'Edit',
};

export const MenuItemWithLeadingAndTrailingIcon = MenuItemTemplate.bind({});
MenuItemWithLeadingAndTrailingIcon.args = {
    label: 'Main Label',
    secondaryLabel: '@Secondary Label',
    leadingIcon: 'Edit',
    trailingIcon: 'Delete',
};
