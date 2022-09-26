import React from 'react';

// Constants
import {ToggleSwitchLabelPositioningValues} from '@Constants';

type ToggleSwitchProps = {
    active: boolean;
    onChange: (active: boolean) => void;
    label?: string;
    labelPositioning?: ToggleSwitchLabelPositioning;
}

const ToggleSwitch = ({
    active,
    onChange,
    label,
    labelPositioning = ToggleSwitchLabelPositioningValues.Left,
}: ToggleSwitchProps): JSX.Element => (
    <div className={`toggle-switch-container margin-bottom-20 padding-bottom-10 d-flex align-items-center ${labelPositioning === ToggleSwitchLabelPositioningValues.Right && 'flex-row-reverse'}`}>
        {label && <span className={labelPositioning === ToggleSwitchLabelPositioningValues.Left ? 'toggle-switch-label--left margin-right-10' : 'toggle-switch-label--right margin-left-10'}>{label}</span>}
        <label className='toggle-switch position-relative d-inline-block margin-0 cursor-pointer'>
            <input
                type='checkbox'
                className='toggle-switch__input'
                checked={active}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className='toggle-switch__slider position-absolute cursor-pointer'/>
        </label>
    </div>
);

export default ToggleSwitch;
