import React from 'react';
import {Story, Meta} from '@storybook/react';

import {NoData} from './NoData.component';
import {NoDataProps} from './NoData';

export default {
    title: 'Component/NoData',
    component: NoData,
} as Meta<NoDataProps>;

export const Default: Story<NoDataProps> = (args) => <NoData {...args}/>;

Default.args = {
    iconName: 'Pin',
    message: 'No data to display',
};
