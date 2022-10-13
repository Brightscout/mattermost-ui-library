import React, {useState} from 'react';

import {CheckBoxProps} from './CheckBox';
import {StyledCheckBox, StyledCheckBoxContainer, StyledSelector} from './CheckBox.styles';

/**
 * CheckBox Component
 *
 * @example Correct usage with default props
 * ```ts
 * <CheckBox id="cb_one" name="Male" value="Male" label="Male"/>
 *```
 */
export const CheckBox = (props:CheckBoxProps) => {
    const [ischecked, setIsChecked] = useState(false);

    const {
        id,
        name,
        value,
        label,
        disabled,
        checked,
        error,
    } = props;
    return (
        <StyledCheckBoxContainer
            checked={checked || ischecked}
            disabled={disabled}
        >
            <StyledCheckBox
                id={id}
                name={name}
                value={value}
                disabled={disabled}
                checked={checked || ischecked}
                onClick={() => setIsChecked(!ischecked)}
            />
            <StyledSelector
                checked={checked || ischecked}
                error={error}
            />
            {label}
        </StyledCheckBoxContainer>

    );
};
