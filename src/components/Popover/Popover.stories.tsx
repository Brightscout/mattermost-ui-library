/* eslint-disable no-console */
import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Icon} from '@Components/Icon';
import {MenuItem} from '@Components/MenuItem';

import {Popover} from './Popover.component';
import {PopoverProps} from './Popover';

export default {
    title: 'Component/Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    args: {
        children: <Icon name='MenuDots'/>,
        placement: 'bottom-end',
        popoverBody: <>
            <MenuItem
                onClick={() => {
                    console.log('clicked option 1');
                }}
                leadingElement={
                    <Icon
                        name='Edit'
                        size={14}
                    />}
                label='option 1'
            />
            <MenuItem
                onClick={() => {
                    console.log('clicked option 2');
                }}
                leadingElement={
                    <Icon
                        name='Delete'
                        size={14}
                    />}
                label='option 2'
            />
        </>,
    },
} as Meta<PopoverProps>;

const PopoverTemplate:Story<PopoverProps> = (args) => <Popover {...args}/>;

// Default
export const Default = PopoverTemplate.bind({});
