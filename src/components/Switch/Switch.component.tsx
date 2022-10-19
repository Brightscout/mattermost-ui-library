import React from 'react';
import {Form} from 'react-bootstrap';

import {SwitchProps} from './Switch';
import {StyledSwitch} from './Switch.styles';

/**
 * Switch Component
 *
 * @example Correct usage with default props
 *
 * ```ts
 *  <Switch label='Label'/>
 * ```
 *
 * @example Correct usage with sub-label
 *
 * ```ts
 *  <Switch label='Label' sublabel='Sub-Label'/>
 * ```
 *
 */
export const Switch = (props: SwitchProps) => {
    const {id, label, subLabel, error, className = '', fullWidth = false, ...restProps} = props;

    return (
        <StyledSwitch
            className={`mm-switch ${className}`}
            id={id}
            fullWidth={fullWidth}
        >
            <Form.Check.Input
                className='mm-switch_input'
                isInvalid={error}
                {...restProps}
            />
            <div className='mm-switch_labels'>
                <Form.Check.Label className='mm-switch_label'>{label}</Form.Check.Label>
                <Form.Check.Label className='mm-switch_subLabel'>
                    {subLabel}
                </Form.Check.Label>
            </div>
        </StyledSwitch>
    );
};
