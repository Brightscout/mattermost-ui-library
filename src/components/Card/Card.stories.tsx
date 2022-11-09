import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Card} from './Card.component';
import {CardProps} from './Card';

export default {
    title: 'Component/Card',
    component: Card,
} as Meta<typeof Card>;

const CardTemplate: Story<CardProps> = (args) => <Card {...args}/>;

// Default
export const Default = CardTemplate.bind({});
Default.args = {
    children: 'Passed in children',
};
