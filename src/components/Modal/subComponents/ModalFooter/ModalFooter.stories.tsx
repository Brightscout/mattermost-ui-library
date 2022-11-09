import React from 'react';
import {Story, Meta} from '@storybook/react';

import {ModalFooterProps} from './ModalFooter';
import {ModalFooter} from './ModalFooter.component';

export default {
    title: 'Component/Modal/ModalFooter',
    component: ModalFooter,
} as Meta<ModalFooterProps>;

const ModalFooterTemplate: Story<ModalFooterProps> = (args) => <ModalFooter {...args}/>;

// Default
export const Default = ModalFooterTemplate.bind({});
