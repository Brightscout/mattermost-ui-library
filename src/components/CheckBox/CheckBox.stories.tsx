import React from 'react';
import {Story, Meta} from '@storybook/react';

import {CheckBoxProps} from './CheckBox';
import {CheckBox} from './CheckBox.component';

export default {
    title: 'Component/CheckBox',
    component: CheckBox,
} as Meta;

const CheckboxTemplate:Story<CheckBoxProps> = (args) => <CheckBox {...args}/>;

/**
 * Default checkbox
 */
export const Default = CheckboxTemplate.bind({});
Default.args = {
    id: 'item',
    name: 'Male',
    value: 'Male',
    label: 'Label',
};
