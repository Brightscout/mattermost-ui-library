import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Nodata} from './Nodata.component';
import {NodataProps} from './Nodata';

export default {
    title: 'Component/Nodata',
    component: Nodata,
} as Meta<NodataProps>;

export const Default: Story<NodataProps> = (args) => <Nodata {...args}/>;

Default.args = {
    iconName: 'Pin',
    message: 'No data to display',
};
