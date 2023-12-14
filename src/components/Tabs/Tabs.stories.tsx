import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Tabs} from './Tabs.component';
import {TabsConfig, TabsProps} from './Tabs';

export default {
    title: 'Component/Tabs',
    component: Tabs,
} as Meta<TabsProps>;

const TabsTemplate: Story<TabsProps> = (args) => <Tabs {...args}/>;

export const Default = TabsTemplate.bind({});

export const WithoutStickyHeader = TabsTemplate.bind({});

export const WithJustified = TabsTemplate.bind({});

const tabsConfig: TabsConfig[] = [
    {
        key: 1,
        title: 'Tab 1',
        content: <p style={{height: '150vh'}}>{'This is content for Tab 1'}</p>,
    },
    {
        key: 2,
        title: 'Tab 2',
        content: <p style={{height: '150vh'}}>{'This is content for Tab 2'}</p>,
    },
];

Default.args = {
    tabsConfig,
};

WithJustified.args = {
    ...Default.args,
    justified: true,
};

WithoutStickyHeader.args = {
    ...Default.args,
    stickyHeader: false,
};
