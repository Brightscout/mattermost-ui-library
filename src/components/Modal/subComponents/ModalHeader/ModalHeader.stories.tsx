import React from 'react';
import {Story, Meta} from '@storybook/react';

import {ModalHeader} from './ModalHeader.component';
import {ModalHeaderProps} from './ModalHeader';

export default {
    title: 'Component/Modal/ModalHeader',
    component: ModalHeader,
    args: {
        title: 'Modal Header',
    },
} as Meta<typeof ModalHeader>;

const ModalHeaderTemplate: Story<ModalHeaderProps> = (args) => <ModalHeader {...args}/>;

// Default
export const Default = ModalHeaderTemplate.bind({});

export const WithSubtitle = ModalHeaderTemplate.bind({});
WithSubtitle.args = {
    subtitle: 'Diam viverra donec nisi in lorem dictum',
};
