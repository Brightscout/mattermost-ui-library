import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import {Icon} from '../Icon';
import {MenuItem} from '../MenuItem';

import {Overlay} from './Overlay.component';
import {OverlayProps} from './Overlay';

export default {
    title: 'Component/Overlay',
    component: Overlay,
    parameters: {
        layout: 'centered',
    },
    args: {
        children: <Icon name='MenuDots'/>,
        placement: 'bottom',
        popoverBody: <>
            <MenuItem
                onClick={() => ''}
                leadingElement={
                    <Icon
                        name='Edit'
                        size={16}
                    />
                }
                label='option 1'
            />
            <MenuItem
                onClick={() => ''}
                leadingElement={
                    <Icon
                        name='Delete'
                        size={16}
                    />
                }
                label='option 2'
            />
        </>,
    },

} as Meta<OverlayProps>;

const OverlayTemplate: Story<OverlayProps> = (args) => {
    const [show, setShow] = useState(false);
    return (
        <Overlay
            {...args}
            show={show}
            setShow={setShow}
        />);
};

// Default
export const Default = OverlayTemplate.bind({});
