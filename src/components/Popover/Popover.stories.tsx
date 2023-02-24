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
                onClick={() => ''}
                leadingIcon='Edit'
                label='option 1'
            />
            <MenuItem
                onClick={() => ''}
                leadingIcon='Delete'
                label='option 2'
            />
        </>,
    },
} as Meta<PopoverProps>;

const PopoverTemplate:Story<PopoverProps> = (args) => <Popover {...args}/>;

// Default
export const Default = PopoverTemplate.bind({});
