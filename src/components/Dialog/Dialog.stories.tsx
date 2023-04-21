import React from 'react';
import {Story, Meta} from '@storybook/react';

import {LinearProgress} from '../LinearProgress';

import {Dialog} from './Dialog.component';
import {DialogProps} from './Dialog';

export default {
    title: 'Component/Dialog',
    component: Dialog,
    args: {
        title: 'Dialog Header',
        show: true,
    },
    argTypes: {
        backdrop: {
            options: ['static', true, false],
            control: {type: 'select'},
        },
    },
} as Meta<typeof Dialog>;

const DialogTemplate:Story<DialogProps> = (args) => <Dialog {...args}/>;

// Default
export const Default = DialogTemplate.bind({});

// Dialog with description and primary action
export const WithDescriptionWithPrimaryAction = DialogTemplate.bind({});
WithDescriptionWithPrimaryAction.args = {
    description: 'Are you sure you want to subscribe this subscription ?',
    primaryActionText: 'Submit',
};

// Dialog with description and destructive primary action
export const WithDescriptionWithDestructivePrimaryAction = DialogTemplate.bind({});
WithDescriptionWithDestructivePrimaryAction.args = {
    description: 'Are you sure you want to delete this subscription ?',
    destructive: true,
    primaryActionText: 'Delete',
};

// Dialog with description and destructive secondary action only
export const WithDescriptionAndWithDestructiveSecondaryActionOnly = DialogTemplate.bind({});
WithDescriptionAndWithDestructiveSecondaryActionOnly.args = {
    title: 'Unable to delete subscription',
    description: 'The subscription could not be deleted because of some error',
    destructive: true,
};

// Dialog with custom jsx as content
export const WithCustomJsxAsContent = DialogTemplate.bind({});
WithCustomJsxAsContent.args = {
    children: <LinearProgress/>,
    primaryActionText: 'Delete',
    destructive: true,
};

// Dialog with only jsx as content
export const WithOnlyJsxAsContent = DialogTemplate.bind({});
WithOnlyJsxAsContent.args = {
    // eslint-disable-next-line no-undefined
    title: undefined,
    children: <div>
        <h1>{'Custom Jsx'}</h1>
        <p>{'This whole is a custom jsx element'}</p>
    </div>,
};
