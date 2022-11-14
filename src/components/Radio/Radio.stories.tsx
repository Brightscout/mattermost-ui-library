import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Radio} from './Radio.component';
import {RadioProps} from './Radio';

export default {
    title: 'Component/Radio',
    component: Radio,
    args: {
        label: 'Label',
        value: 'phone',
        name: 'label',
    },
} as Meta<RadioProps>;

const RadioTemplate: Story<RadioProps> = (args) => <Radio {...args}/>;

// Default
export const Default = RadioTemplate.bind({});

// Error state for radio
export const ErrorState = RadioTemplate.bind({});
ErrorState.args = {
    error: true,
};

// Disabled state for radio
export const DisabledState = RadioTemplate.bind({});
DisabledState.args = {
    disabled: true,
};

// Two radio buttons
export const TwoRadioButtons = () => {
    const [selected, setSelected] = React.useState<undefined | string>();
    const onClickHandler = (
        _: React.MouseEvent<HTMLInputElement, MouseEvent>,
        value: string,
    ) => {
        setSelected(value);
    };

    return (
        <div style={{display: 'flex', gap: 10}}>
            <Radio
                label='Male'
                value='male'
                name='gender'
                id='male'
                onClick={onClickHandler}
            />
            <Radio
                label='Female'
                value='female'
                name='gender'
                id='female'
                onClick={onClickHandler}
            />
            {selected && <div>{`selected ${selected}`}</div>}
        </div>
    );
};
