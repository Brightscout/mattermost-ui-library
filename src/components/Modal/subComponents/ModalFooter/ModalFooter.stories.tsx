import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Button} from '@Components/Button';

import {ModalFooterProps} from './ModalFooter';
import {ModalFooter} from './ModalFooter.component';

export default {
    title: 'Component/Modal/ModalFooter',
    component: ModalFooter,
} as Meta<typeof ModalFooter>;

const ModalFooterTemplate: Story<ModalFooterProps> = (args) => <ModalFooter {...args}/>;

// Default
export const Default = ModalFooterTemplate.bind({});
Default.args = {
    primary: <Button variant='primary'>{'Submit'}</Button>,
    secondary: <Button variant='tertiary'>{'Close'}</Button>,
};
