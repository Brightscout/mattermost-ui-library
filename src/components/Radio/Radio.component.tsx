import React from 'react';

import {extendClassname} from '@Utils';

import {RadioProps} from './Radio';
import {InputContainer, RadioContainer} from './Radio.styles';

/**
 * Radio Component
 *
 * @example Correct usage
 * <Radio
 *  label='Male'
 *  value='male'
 *  name='gender'
 *  onChange={onChangeHandler}
 * />
 */
export const Radio = (props: RadioProps) => {
    const {
        error,
        label,
        disabled,
        onClick,
        id,
        className = '',
        size = 'md',
        ...restProps
    } = props;

    const onClickHandler = (
        e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    ) => {
        onClick(e, (e.target as HTMLInputElement).value);
    };

    return (
        <RadioContainer
            size={size}
            className={`mm-radio ${className} ${extendClassname({
                'mm-radio-error': Boolean(error),
                'mm-radio-disabled': Boolean(disabled),
            })}`}
        >
            <InputContainer className='input-wrapper'>
                <input
                    className='mm-radio-input'
                    type='radio'
                    onClick={onClickHandler}
                    disabled={disabled}
                    id={id}
                    {...restProps}
                />
                <span className='mm-radio-active'/>
            </InputContainer>
            <label
                htmlFor={id}
                className='radio-label'
            >
                {label}
            </label>
        </RadioContainer>
    );
};
