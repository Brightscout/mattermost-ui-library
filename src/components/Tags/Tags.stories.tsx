import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Tags} from './Tags.component';
import {TagsProps} from './Tags';

export default {
    title: 'Component/Tags',
    component: Tags,
    args: {
        type: 'label',
        text: 'TAG',
    },
} as Meta<typeof Tags>;

const TagsTemplate:Story<TagsProps> = (args) => <Tags {...args}/>;

// General label
export const GeneralLabel = TagsTemplate.bind({});
GeneralLabel.args = {
    variant: 'general',
};

// Info label
export const InfoLabel = TagsTemplate.bind({});
InfoLabel.args = {
    variant: 'info',
};

// Warning label
export const WarningLabel = TagsTemplate.bind({});
WarningLabel.args = {
    variant: 'warning',
};

// Success label
export const SuccessLabel = TagsTemplate.bind({});
SuccessLabel.args = {
    variant: 'success',
};

// Shortcut tag
export const ShortcutTags = TagsTemplate.bind({});
ShortcutTags.args = {
    type: 'shortcut',
    text: 'Ctrl',
};

// Highlight tag
export const HighlightTags = TagsTemplate.bind({});
HighlightTags.args = {
    text: '@mention',
    type: 'highlight',
};

// Tags with tooltip
export const TagsWithTooltip = TagsTemplate.bind({});
TagsWithTooltip.args = {
    text: '@mention',
    type: 'highlight',
    tooltip: {text: 'mentioning user', placement: 'right'},
};