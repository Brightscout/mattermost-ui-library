import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Icon} from './Icon.component';
import {IconProps} from './Icon';

export default {
    title: 'Component/Icon',
    component: Icon,
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
} as Meta;

const IconTemplate: Story<IconProps> = (args) => <Icon {...args}/>;

// Default
export const Default = IconTemplate.bind({});
Default.args = {
    name: 'Unlink',
};

// Icon with custom size and color
export const IconWithSizeAndColor = IconTemplate.bind({});
IconWithSizeAndColor.args = {
    name: 'Unlink',
    iconColor: '#000',
    size: 48,
};
