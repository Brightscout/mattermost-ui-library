/* eslint-disable @typescript-eslint/indent */
import React from 'react';

import {Icon} from '@Components/Icon';
import {extendClassname} from '@Utils';

import {StyledInput, StyledFieldSet, StyledInputContainer} from './Input.styles';
import {InputProps} from './Input';

/**
 * DisplayFieldSet - sub-component
 *
 * Displays fieldset for input component
 */
const DisplayFieldSet = ({value, error, label}: InputProps) => (
    <StyledFieldSet
        className={`input_label ${extendClassname({
            'visible_label-border': Boolean(value),
            input_error: Boolean(error),
        })}`
        }
        error={error}
    >
        <legend className={extendClassname({visible_label: Boolean(value)})}>
            {label}
        </legend>
    </StyledFieldSet>
);

/**
 * Input Component
 *
 * @example Correct usage
 * ```ts
 * <Input label='label'/>
 * ```
 *
 * @example Correct usage with icon
 * ```ts
 * <Input label='label' iconName='Globe'/>
 * ```
 */
export const Input = (props: InputProps) => {
    const {label, iconName, className = '', fullWidth, ...restProps} = props;
    const {readOnly, error, required, value = ''} = restProps;

    const inputLabel = `${label}${required ? ' *' : ''}`;

    const togglePlaceholderValue = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
        if (!readOnly) {
            event.target.placeholder = type === 'focus' ? '' : inputLabel;
        }
    }

    return (
        <StyledInputContainer
            className={`mm-input ${className}`}
            fullWidth={fullWidth}
        >
            {iconName &&
                <Icon
                    name={iconName}
                    size={16}
                />
            }
            <StyledInput
                placeholder={inputLabel}
                onFocus={(event: React.ChangeEvent<HTMLInputElement>) => 
                    togglePlaceholderValue(event, 'focus')
                }
                onBlur={(event: React.ChangeEvent<HTMLInputElement>) => 
                    togglePlaceholderValue(event, 'blur')
                }
                {...restProps}
            />
            <DisplayFieldSet
                value={value}
                label={inputLabel}
                error={error}
            />
        </StyledInputContainer>
    );
};
