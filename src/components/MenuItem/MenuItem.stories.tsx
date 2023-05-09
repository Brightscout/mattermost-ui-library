import React from 'react';
import {Story, Meta} from '@storybook/react';

import {MenuItem} from './MenuItem.component';
import {MenuItemProps} from './MenuItem';
import {Icon} from '../Icon';
import {Tag} from '../Tag';

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

export const MenuItemWithLeadingElement = MenuItemTemplate.bind({});
MenuItemWithLeadingElement.args = {
    label: 'Main Label',
    leadingElement: <Icon name='User' size={24}/>,
};

export const MenuItemWithTrailingElement = MenuItemTemplate.bind({});
MenuItemWithTrailingElement.args = {
    label: 'Main Label',
    trailingElement: <Tag type='shortcut' text='16'/>,
};

export const MenuItemWithLeadingElementAndInlineSecondaryLabel = MenuItemTemplate.bind({});
MenuItemWithLeadingElementAndInlineSecondaryLabel.args = {
    label: 'Main Label',
    secondaryLabel: '@Secondary label',
    secondaryLabelPosition: 'inline',
    leadingElement: <Icon name='Edit' size={16}/>,
};

export const MenuItemWithLeadingAndTrailingElement = MenuItemTemplate.bind({});
MenuItemWithLeadingAndTrailingElement.args = {
    label: 'Main Label',
    secondaryLabel: '@Secondary Label',
    leadingElement: <Icon name='Edit' size={16}/>,
    trailingElement: <Icon name='Delete' size={16}/>,
};

export const DisabledMenuItemWithLeadingElement = MenuItemTemplate.bind({});
DisabledMenuItemWithLeadingElement.args = {
    label: 'Main Label',
    leadingElement: <Icon name='User' size={24}/>,
    disabled: true
};

export const DestructiveMenuItemWithLeadingElement = MenuItemTemplate.bind({});
DestructiveMenuItemWithLeadingElement.args = {
    label: 'Main Label',
    leadingElement: <Icon name='User' size={24}/>,
    destructive: true
};
