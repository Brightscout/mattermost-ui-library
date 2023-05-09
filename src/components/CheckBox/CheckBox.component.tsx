import React from 'react';

import {Icon} from '@Components/Icon';

import {extendClassname} from '@Utils';
import {Constants} from '@Constants';

import {CheckBoxProps, CheckboxSizeTypes} from './CheckBox';
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
    const {className = '', id, label, error, disabled, size = Constants.CheckBoxSize.MEDIUM, ...restProps} = props;
    const checkboxIconSizeMap: Record<CheckboxSizeTypes, number> = {
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
                        size={checkboxIconSizeMap[size]}
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
