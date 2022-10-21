import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Tooltip} from './Tooltip.component';
import {TooltipProps} from './Tooltip';

export default {
    title: 'Component/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
} as Meta<typeof Tooltip>;

const TooltipTemplate: Story<TooltipProps> = (args) => <Tooltip {...args}/>;

// Default
export const Default = TooltipTemplate.bind({});
Default.args = {
    children: <a href='#'>{'Click here'}</a>,
    placement: 'top',
    text: 'Edit',
};

// Tooltip with hint
export const TooltipWithHintAndPlacementRight = TooltipTemplate.bind({});
TooltipWithHintAndPlacementRight.args = {
    children: <a href='#'>{'Click here'}</a>,
    placement: 'right',
    text: 'Edit',
    hint: 'edit to change the text of the link',
};

// Tooltip with hint and icon
export const TooltipWithIconAndHint = TooltipTemplate.bind({});
TooltipWithIconAndHint.args = {
    children: <a href='#'>{'Click here'}</a>,
    placement: 'top',
    text: 'Edit',
    hint: 'edit to change the text of the link',
    iconName: 'Edit',
};
