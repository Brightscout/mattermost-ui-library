import React from 'react';

import {Icon} from '@Components/Icon';

import {extendClassname} from '@Utils';

import {CheckBoxProps} from './CheckBox';
import {CheckboxContainer, InputContainer} from './CheckBox.styles';

/**
 * Checkbox Component
 *
 * @example Correct usage with default props
 *
 * ```ts
 *  <Checkbox label="Label"/>
 * ```
 */
export const Checkbox = (props: CheckBoxProps) => {
    const {className = '', id, label, error, disabled, size = 'md', ...restProps} = props;

    const increaseCheckboxIconSizeBy = {
        sm: 10,
        md: 12,
        lg: 16,
    };

    return (
        <CheckboxContainer
            size={size}
            className={`mm-checkbox ${className} ${extendClassname({
                'mm-checkbox-error': Boolean(error),
                'mm-checkbox-disabled': Boolean(disabled),
            })}`}
        >
            <InputContainer className='input-wrapper'>
                <input
                    type='checkbox'
                    className='mm-checkbox-input'
                    id={id}
                    disabled={disabled}
                    {...restProps}
                />
                <span className='mm-checkbox-active'>
                    <Icon
                        name='CheckBold'
                        size={increaseCheckboxIconSizeBy[size]}
                    />
                </span>
            </InputContainer>
            <label
                htmlFor={id}
                className='checkbox-label'
            >
                {label}
            </label>
        </CheckboxContainer>
    );
};
