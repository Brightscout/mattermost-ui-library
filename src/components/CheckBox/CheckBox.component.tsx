import React from 'react';
import {Form} from 'react-bootstrap';

import {CheckBoxProps} from './CheckBox';
import {StyledCheckbox} from './CheckBox.styles';

/**
 * Checkbox Component
 *
 * @example Correct usage with default props
 *
 * ```ts
 *  <Checkbox label="Label"/>
 * ```
 */
export const Checkbox = (props:CheckBoxProps) => {
    const {className = '', id, label, error, ...restProps} = props;

    return (
        <StyledCheckbox
            type='checkbox'
            className={`mm-checkbox ${className}`}
            id={id}
        >
            <Form.Check.Input
                type='checkbox'
                className='mm-checkbox_input'
                isInvalid={error}
                {...restProps}
            />
            <Form.Check.Label>{label}</Form.Check.Label>
        </StyledCheckbox>
    );
};
