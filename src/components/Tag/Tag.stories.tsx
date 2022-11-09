import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Tag} from './Tag.component';
import {TagProps} from './Tag';

export default {
    title: 'Component/Tag',
    component: Tag,
    args: {
        type: 'label',
        text: 'TAG',
    },
} as Meta<TagProps>;

const TagTemplate: Story<TagProps> = (args) => <Tag {...args}/>;

// General label
export const GeneralLabel = TagTemplate.bind({});
GeneralLabel.args = {
    variant: 'general',
};

// Info label
export const InfoLabel = TagTemplate.bind({});
InfoLabel.args = {
    variant: 'info',
};

// Warning label
export const WarningLabel = TagTemplate.bind({});
WarningLabel.args = {
    variant: 'warning',
};

// Success label
export const SuccessLabel = TagTemplate.bind({});
SuccessLabel.args = {
    variant: 'success',
};

// Shortcut tag
export const ShortcutTag = TagTemplate.bind({});
ShortcutTag.args = {
    type: 'shortcut',
    text: 'Ctrl',
};

// Highlight tag
export const HighlightTag = TagTemplate.bind({});
HighlightTag.args = {
    text: '@mention',
    type: 'highlight',
};

// Tag with tooltip
export const TagWithTooltip = TagTemplate.bind({});
TagWithTooltip.args = {
    text: '@mention',
    type: 'highlight',
    tooltip: {text: 'mentioning user', placement: 'right'},
};
