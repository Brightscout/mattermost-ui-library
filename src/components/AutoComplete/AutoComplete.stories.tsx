import React from 'react';
import {Story, Meta} from '@storybook/react';

import {AutoComplete} from './AutoComplete.component';
import {AutoCompleteProps} from './AutoComplete';

export default {
    title: 'Component/AutoComplete',
    component: AutoComplete,
} as Meta;

const AutoCompleteTemplate: Story<AutoCompleteProps> = (args) => <AutoComplete {...args}/>;

// Default
export const Default = AutoCompleteTemplate.bind({});
Default.args = {
    label: 'Label',
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

// AutoComplete options with leading icon
export const OptionWithIcon = AutoCompleteTemplate.bind({});
OptionWithIcon.args = {
    label: 'Label',
    items: [
      { label: 'koko 1', icon: 'User', value: 'Value 1' },
      { label: 'asd 2', icon: 'User', value: 'Value 2' },
      { label: 'xcs 3', icon: 'User', value: 'Value 3' },
      { label: 'koko 4', icon: 'User', value: 'Value 4' },
      { label: 'asd 5', icon: 'User', value: 'Value 5' },
      { label: 'xcs 6', icon: 'User', value: 'Value 6' },
      { label: 'koko 7', icon: 'User', value: 'Value 7' },
      { label: 'asd 8', icon: 'User', value: 'Value 8' },
      { label: 'xcs 9', icon: 'User', value: 'Value 9' },
      { label: 'koko 10', icon: 'User', value: 'Value 10' },
      { label: 'asd 11', icon: 'User', value: 'Value 11' },
      { label: 'xcs 12', icon: 'User', value: 'Value 12' },
    ],
};

// AutoComplete options without label
export const OptionWithoutLabel = AutoCompleteTemplate.bind({});
OptionWithoutLabel.args = {
    label: 'Label',
    items: [
      { icon: 'User', value: 'Value 1' },
      { icon: 'User', value: 'Value 2' },
      { icon: 'User', value: 'Value 3' },
      { icon: 'User', value: 'Value 4' },
      { icon: 'User', value: 'Value 5' },
      { icon: 'User', value: 'Value 6' },
      { icon: 'User', value: 'Value 7' },
      { icon: 'User', value: 'Value 8' },
      { icon: 'User', value: 'Value 9' },
      { icon: 'User', value: 'Value 10' },
      { icon: 'User', value: 'Value 11' },
      { icon: 'User', value: 'Value 12' },
    ],
};

// Full Width AutoComplete
export const FullWidth = AutoCompleteTemplate.bind({});
FullWidth.args = {
    label: 'Label',
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

// AutoComplete with onSelect function
export const OnItemSelect = AutoCompleteTemplate.bind({});
OnItemSelect.args = {
    label: 'Label',
    onSelect: (event, option) => {console.log('on selecting items =>', event, option)},
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
