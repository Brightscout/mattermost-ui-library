import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MMSearchProps } from './MMSearch';

import { MMSearch } from './index';

export default {
    title: 'Component/MMSearch',
    component: MMSearch,
    args: {
        label: 'Search...',
        searchValue: '',
        setSearchValue: (val: string) => {
            console.log(val);
        },
        items: [{ label: 'koko 1', value: 'Value 1' }],
    },
} as Meta;

const MMSearchTemplate: Story<MMSearchProps> = (args) => <MMSearch {...args} />;

// Default
export const Default = MMSearchTemplate.bind({});

Default.args = {
    label: 'Test',
    optionsLoading: false,
    filterBy: '',
    openOptions: true,
};

export const WithSecondaryLabel = MMSearchTemplate.bind({});
WithSecondaryLabel.args = {
    fullWidth: true,
    secondaryLabelPosition: 'block',
    items: [
        { label: 'koko 1', value: 'Value 1', secondaryLabel: 'Value 1' },
        { label: 'asd 2', value: 'Value 2', secondaryLabel: 'Value 2' },
        { label: 'xcs 3', value: 'Value 3', secondaryLabel: 'Value 3' },
        { label: 'koko 4', value: 'Value 4', secondaryLabel: 'Value 4' },
        { label: 'asd 5', value: 'Value 5', secondaryLabel: 'Value 5' },
        { label: 'xcs 6', value: 'Value 6', secondaryLabel: 'Value 6' },
        { label: 'koko 7', value: 'Value 7', secondaryLabel: 'Value 7' },
        { label: 'asd 8', value: 'Value 8', secondaryLabel: 'Value 8' },
        { label: 'xcs 9', value: 'Value 9', secondaryLabel: 'Value 9' },
        { label: 'koko 10', value: 'Value 10', secondaryLabel: 'Value 10' },
        { label: 'asd 11', value: 'Value 11', secondaryLabel: 'Value 11' },
        { label: 'xcs 12', value: 'Value 12', secondaryLabel: 'Value 12' },
    ],
};

export const FullWidth = MMSearchTemplate.bind({});
FullWidth.args = {
    fullWidth: true,
    items: [
        { label: 'koko 1', value: 'Value 1' },
        { label: 'asd 2', value: 'Value 2' },
        { label: 'xcs 3', value: 'Value 3' },
        { label: 'koko 4', value: 'Value 4' },
        { label: 'asd 5', value: 'Value 5' },
        { label: 'xcs 6', value: 'Value 6' },
        { label: 'koko 7', value: 'Value 7' },
        { label: 'asd 8', value: 'Value 8' },
        { label: 'xcs 9', value: 'Value 9' },
        { label: 'koko 10', value: 'Value 10' },
        { label: 'asd 11', value: 'Value 11' },
        { label: 'xcs 12', value: 'Value 12' },
    ],
};
