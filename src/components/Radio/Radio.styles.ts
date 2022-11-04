import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

export const RadioContainer = styled.div({
    display: 'inline-flex',
    alignItems: 'center',

    '.radio-label': {
        margin: 0,
        color: Colors.centerChannel,
    },

    '.radio-label[for]': {
        cursor: 'pointer',
    },

    // Styles based on `size` prop
    '&.mm-radio-sm ': {
        gap: 8,

        '.radio-label': {
            fontSize: 12,
        },

        '.input-wrapper': {
            width: 12,
            height: 12,
        },

        '.mm-radio-active': {
            width: 6,
            height: 6,
        },
    },

    '&.mm-radio-md': {
        gap: 10,

        '.radio-label': {
            fontSize: 14,
        },

        '.input-wrapper': {
            width: 16,
            height: 16,
        },

        '.mm-radio-active': {
            width: 8,
            height: 8,
        },
    },

    '&.mm-radio-lg': {
        gap: 12,

        '.radio-label': {
            fontSize: 16,
        },

        '.input-wrapper': {
            width: 20,
            height: 20,
        },

        '.mm-radio-active': {
            width: 10,
            height: 10,
        },
    },

    // Error state
    '&.mm-radio-error': {
        '.mm-radio-input, .mm-radio-input:checked': {
            borderColor: Colors.error,
        },

        '.mm-radio-active': {
            backgroundColor: Colors.error,
        },
    },

    // Disabled state
    '&.mm-radio-disabled': {
        '.radio-label': {
            opacity: '40%',
        },
        '.radio-label[for]': {
            cursor: 'default',
        },
    },
});

export const InputContainer = styled.div({
    display: 'inline-block',
    position: 'relative',
    width: 20,
    height: 20,
    borderRadius: '50%',

    // Styles of radio input on the basis of `size` prop
    '& .mm-radio-input': {
        appearance: 'none',
        display: 'block',
        height: 'inherit',
        width: 'inherit',
        border: `1px solid ${Colors.centerChannel_24}`,
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: Colors.centerChannelBg,
    },

    // styles for radio input on disabled state
    '& .mm-radio-input[disabled]': {
        backgroundColor: 'unset',
        pointerEvents: 'none',
        cursor: 'default',
    },

    // styles for radio input on checked state
    '& .mm-radio-input:checked': {
        borderColor: Colors.primary,
    },

    '& .mm-radio-input[disabled].mm-radio-input:checked': {
        borderColor: Colors.centerChannel_24,
    },

    '& .mm-radio-active': {
        position: 'absolute',
        inset: '0 0 0',
        margin: 'auto',
        borderRadius: '50%',
        transform: 'scale(0)',
        transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: 'none',
        backgroundColor: Colors.primary,
    },

    '& .mm-radio-input[disabled] ~ .mm-radio-active': {
        backgroundColor: Colors.centerChannel_48,
    },

    // Styles of input radio active on checked state
    '& .mm-radio-input:checked ~ .mm-radio-active': {
        transform: 'scale(1)',
    },
});
