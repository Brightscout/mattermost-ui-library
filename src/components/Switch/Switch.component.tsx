import React from 'react';

import {extendClassname} from '@Utils';

import {SwitchProps} from './Switch';
import {SwitchContainer, InputWrapper} from './Switch.styles';

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
    const {id, label, subLabel, error, className = '', fullWidth = false, disabled, ...restProps} = props;

    return (
        <SwitchContainer
            className={`mm-switch ${className}${extendClassname({
                'mm-switch-error': Boolean(error),
                'mm-switch-disabled': Boolean(disabled),
            })}`}
            id={id}
            fullWidth={fullWidth}
        >
            <div className='mm-switch-labels'>
                <label className='mm-switch-label'>{label}</label>
                <label className='mm-switch-subLabel'>{subLabel}</label>
            </div>
            <InputWrapper>
                <input
                    type='checkbox'
                    className='mm-switch-input'
                    disabled={disabled}
                    {...restProps}
                />
            </InputWrapper>
        </SwitchContainer>
    );
};
