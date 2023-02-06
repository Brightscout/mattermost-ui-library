import React from 'react';

import {extendClassname} from '@Utils';

import {InputErrorMessage} from 'commonStyledComponents/InputErrorMessage/InputErrorMessage.styles';

import {TextAreaProps} from './TextArea';
import {
    Label,
    StyledFieldSet,
    StyledTextArea,
    TextAreaContainer,
} from './TextArea.styles';

/**
 * DisplayFieldSet - sub-component
 *
 * Displays fieldset for textarea component
 */
const DisplayFieldSet = ({value, error, label}: TextAreaProps) => {
    return (
        <StyledFieldSet
            label={label}
            className={`${extendClassname({'fieldset-error': Boolean(error)})}`}
        >
            <legend
                className={`${extendClassname({'legend-active': Boolean(value)})}`}
            >
                {label}
            </legend>
        </StyledFieldSet>
    );
};

/**
 * Textarea Component
 *
 * @example Correct usage
 * ```ts
 * <TextArea label='label' />
 * ```
 */
export const TextArea = (props: TextAreaProps) => {
    const {error = '', label, required, className = '', ...restProps} = props;
    const {value = ''} = restProps;

    const textAreaLabel = `${label}${required ? ' *' : ''}`;

    return (
        <div>
            <TextAreaContainer
                className={`mm-textarea ${className} ${extendClassname({
                    'textarea-error': Boolean(error),
                })}`}
            >
                <StyledTextArea
                    as='textarea'
                    {...restProps}
                />
                <Label
                    className={`textarea-label ${extendClassname({
                        'label-visible': Boolean(value),
                        'label-error': Boolean(error),
                    })}`}
                >
                    {textAreaLabel}
                </Label>
                <DisplayFieldSet
                    label={textAreaLabel}
                    value={value}
                    error={error}
                />
            </TextAreaContainer>
            {Boolean(error) && <InputErrorMessage>{error}</InputErrorMessage>}
        </div>
    );
};
