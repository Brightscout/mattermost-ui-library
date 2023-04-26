import styled from 'styled-components';
import {Button, Form} from 'react-bootstrap';

import colors from '@Styles/colorsForJs.module.scss';

// Style for Input Fieldset
export const StyledFieldSet = styled.fieldset<{error?: string}>(({error}) => {
    return ({
        border: `1px solid ${error ? colors.error : colors.centerChannel_16}`,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,
        top: -8,
        borderRadius: '4px',
        pointerEvents: 'none',

        // Style for fieldset legend
        '& legend': {
            float: 'unset',
            width: 'auto',
            overflow: 'hidden',
            display: 'block',
            padding: 0,
            fontSize: 10,
            lineHeight: '12px',
            color: `${error ? colors.error : colors.centerChannel_64}`,
            visibility: 'hidden',
            maxWidth: 0.01,
            transition: 'max-width 50ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
            whiteSpace: 'nowrap',
        },

        // Style for fieldset on hover
        '.mm-input input:hover + &': {
            borderColor: colors.centerChannel_48,

            '&.input_error': {
                borderColor: colors.error,
            },
        },

        // Style for fieldset on active
        '.mm-input input:active + &': {
            borderColor: colors.primary,
            backgroundColor: colors.primary_4,

            '&.input_error': {
                borderColor: colors.error,
                background: 'none',
            },
        },

        // Style for fieldset on focus
        '.mm-input input:focus + &': {
            borderWidth: 2,
            borderColor: colors.primary,

            // Style for fieldset legend on focus
            '& legend': {
                color: colors.primary,
            },

            '&.input_error': {
                borderColor: colors.error,
                '& legend': {
                    color: colors.error,
                },
            },
        },

        // Style for legend on focus
        '.mm-input input:focus + & legend, .visible_label': {
            paddingInline: 4,
            visibility: 'visible',
            maxWidth: '100%',
            marginLeft: 10,
            transition: 'max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms',
        },

        // Style for fieldset on input disable
        '.mm-input input:disabled + &, .mm-input input.form-control[readonly] + &': {
            background: colors.centerChannel_4,
            border: `1px solid ${colors.centerChannel_48}`,

            '& .visible_label': {
                paddingInline: 4,
                color: colors.centerChannel_64,
                visibility: 'visible',
                maxWidth: '100%',
                transition: 'max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms',
            },
        },

    });
});

// Style for Input Container
export const StyledInputContainer = styled.div<{fullWidth?: boolean}>(({fullWidth}) => ({
    position: 'relative',
    width: fullWidth ? 'auto' : 'fit-content',
    display: 'flex',
    alignItems: 'center',
    paddingInline: '8px',
    backgroundColor: colors.centerChannelBg,

    // Style for icon in input component
    '& > .mm-icon': {
        marginLeft: 8,
        '& svg path': {
            color: colors.centerChannel_64,
        },
    },
}));

// Style for Input Component
export const StyledInput = styled(Form.Control)(({error}) => ({
    display: 'block',
    fontSize: 14,
    padding: '12px 8px',
    width: '100%',
    fontWeight: 400,
    lineHeight: '16px',
    color: `${error ? colors.error : colors.centerChannel}`,
    border: 'none',
    appearance: 'none',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',

    // Style for input on focus-visible
    '&:focus-visible': {
        outline: 0,
    },

    // Style for input on disable
    '&:disabled': {
        background: 'transparent',
    },

    // Style for input on focus
    '&:focus': {
        color: 'inherit',
        background: 'inherit',
        border: 'none',
        outline: 0,
        boxShadow: 'none',
    },

    '&.disableResize': {
        resize: 'none',
    },
}));

// Style for close icon button
export const StyledIconButton = styled(Button)({
    borderRadius: '50%',
    padding: 0,
    borderWidth: 0,

    '&.btn.btn-primary': {
        '&, &:hover, &:active, &:focus': {
            background: colors.centerChannel_64,
        },
    },

    '& svg': {
        padding: 1,
    },
});
