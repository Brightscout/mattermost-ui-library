import React, {forwardRef} from 'react';
import {FormControl} from 'react-bootstrap';

import {Icon} from '@Components/Icon';
import {extendClassname} from '@Utils';

import {InputProps} from './Input';
import {
    StyledInput,
    StyledFieldSet,
    StyledInputContainer,
    StyledIconButton,
    increaseInputSizeBy,
} from './Input.styles';

/**
 * DisplayFieldSet - sub-component
 *
 * Displays fieldset for input component
 */
const DisplayFieldSet = ({value, error, label, borderLess}: InputProps) => (
    <StyledFieldSet
        className={`input_label ${extendClassname({
            'visible_label-border': Boolean(value),
            input_error: Boolean(error),
            input_borderless: Boolean(borderLess),
        })}`}
        error={error}
        borderLess={borderLess}
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
export const Input = forwardRef<FormControl, InputProps>((props, ref) => {
    const {
        label,
        iconName,
        className = '',
        fullWidth,
        onClose,
        searchQuery,
        borderLess = false,
        size = 'md',
        ...restProps
    } = props;
    const {readOnly, error, required, value = ''} = restProps;

    const inputLabel = `${label}${required ? ' *' : ''}`;

    /**
	 * Toggle placeholder value on type change
	 * @param event - HTML input event
	 * @param type - focus, blur
	 */
    const togglePlaceholderValue = (
        event: React.FocusEvent<FormControl & HTMLInputElement>,
        type: string,
    ) => {
        if (!readOnly) {
            event.target.placeholder = type === 'focus' ? '' : inputLabel;
        }
    };

    return (
        <StyledInputContainer
            className={`mm-input ${className}`}
            fullWidth={fullWidth}
            size={size}
        >
            {iconName && (
                <Icon
                    name={iconName}
                    size={12 + (2 * increaseInputSizeBy[size])}
                />
            )}
            <StyledInput
                ref={ref}
                placeholder={inputLabel}
                onFocus={(event: React.FocusEvent<FormControl & HTMLInputElement>) =>
                    togglePlaceholderValue(event, 'focus')
                }
                onBlur={(event: React.FocusEvent<FormControl & HTMLInputElement>) =>
                    togglePlaceholderValue(event, 'blur')
                }
                label={label}
                {...restProps}
            />
            {searchQuery && (
                <StyledIconButton
                    onClick={onClose}
                    bsStyle='primary'
                    className='clear-input-button'
                >
                    <Icon
                        name='Close'
                        size={8 + (2 * increaseInputSizeBy[size])}
                    />
                </StyledIconButton>
            )}
            <DisplayFieldSet
                value={value}
                label={inputLabel}
                error={error}
                borderLess={borderLess}
            />
        </StyledInputContainer>
    );
});
