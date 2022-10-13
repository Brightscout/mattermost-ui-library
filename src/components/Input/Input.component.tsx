import React from 'react';

import {Icon} from '@Components/Icon';

import {StyledInput, StyledFieldSet, StyledInputContainer} from './Input.styles';
import {InputProps} from './Input';

const DisplayFieldSet = (props: InputProps) => {
    const {value, error, label} = props;

    return (
        <StyledFieldSet
            className={`input_label ${value === '' ? '' : 'visible_label-border'} ${error ? 'input_error' : ''}`}
            error={error}
        >
            <legend className={value === '' ? '' : 'visible_label'}>{label}</legend>
        </StyledFieldSet>
    );
};

/**
 * Input Component
 *
 * @example Correct usage
 * ```ts
 * <Input label={'label'}/>
 * ```
 *
 * @example Correct usage with icon
 * ```ts
 * <Input label='label' iconName='Globe'/>
 * ```
 */
export const Input = (props: InputProps) => {
    const {label, iconName, classname = '', fullWidth, ...restProps} = props;
    const {readOnly, error, value = ''} = restProps;

    return (
        <StyledInputContainer
            className={`mm-input ${classname}`}
            fullWidth={fullWidth}
        >
            {iconName &&
                <Icon
                    name={iconName}
                    size={16}
                />
            }
            <StyledInput
                placeholder={label}
                onFocus={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (!readOnly) {
                        event.target.placeholder = '';
                    }
                }}
                onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (!readOnly) {
                        event.target.placeholder = label;
                    }
                }}
                {...restProps}
            />
            <DisplayFieldSet
                value={value}
                label={label}
                error={error}
            />
        </StyledInputContainer>
    );
};
