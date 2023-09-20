import styled from 'styled-components';
import {FormControl} from 'react-bootstrap';

import Colors from '@Styles/colorsForJs.module.scss';

export const TextAreaContainer = styled.div({
    position: 'relative',

    // Error state
    '&.textarea--error': {

        // Styles for label and label on focus
        'textarea:focus + label, label': {
            color: Colors.error,
        },

        // Styles for label when in disabled or readonly state
        'textarea[disabled] + label, textarea[readonly] + label': {
            color: Colors.centerChannel,
        },

        // Styles for fieldset
        fieldset: {
            borderColor: Colors.error,
        },

        // Styles for fieldset on focus
        'textarea:focus ~ fieldset': {
            borderWidth: 2,
            borderColor: Colors.error,
        },
    },
});

export const StyledTextArea = styled(FormControl)({
    display: 'block',
    width: '100%',
    padding: '10px 8px',
    border: 'none',
    borderRadius: 4,
    appearance: 'none',
    overflowY: 'visible',
    fontSize: 14,
    fontWeight: 400,
    color: Colors.centerChannel,
    backgroundColor: Colors.centerChannelBg,
    minHeight: 40,

    // Styles for text area on readOnly state
    '&[readonly], &[disabled]': {
        pointerEvents: 'none',
        background: Colors.centerChannel_4,
    },

    // Styles for textarea on focus
    '&:focus': {
        outline: 0,
    },
});

/**
 * Label styles in focussed state
 */
const LABEL_STYLES_WHEN_FOCUSSED = { 
    fontSize: 10,
    transform: 'translate(3px,-18.5px)'
}

export const Label = styled.label({
    position: 'absolute',
    pointerEvents: 'none',
    top: 10,
    left: 10,
    fontSize: 14,
    color: Colors.centerChannel_64,
    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, font-size 100ms ease-in-out',
    transformOrigin: 'left top 0',

    // Styles for label on focus state
    '.mm-textarea textarea:focus + &': {
        color: Colors.primary,
        ...LABEL_STYLES_WHEN_FOCUSSED
    },

    // Styles for label when value is present
    '&.label--value-present': LABEL_STYLES_WHEN_FOCUSSED
});

export const StyledFieldSet = styled.fieldset<{label?:string}>(({label}) => {
    return {
        position: 'absolute',
        inset: '-6px 0 0',
        padding: '0 8px',
        pointerEvents: 'none',
        borderRadius: 4,
        border: `1px solid ${Colors.centerChannel_16}`,

        // Styles for fieldset on disabled and readonly state
        '.mm-textarea textarea[readonly] ~ &, .mm-textarea textarea[disabled] ~ &': {
            border: `1px solid ${Colors.centerChannel_48}`,
        },

        // Styles for legend
        '& legend': {
            maxWidth: '0.01px',
            lineHeight: '12px',
            visibility: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: 10,
        },

        // Styles for fieldset on focus
        '.mm-textarea textarea:focus ~ &': {
            borderWidth: 2,
            borderColor: Colors.primary,

            // Styles for legend on focus
            '& legend': {
                ...(label ? {
                    maxWidth: 'fit-content',
                    visibility: 'hidden',
                    padding: '0 6px'} : {}),

            },
        },

        // Styles for legend when value is present
        '.legend-active': {
            ...(label ? {maxWidth: 'fit-content',
                visibility: 'hidden',
                padding: '0 6px'} : {}),
        },
    };
});
