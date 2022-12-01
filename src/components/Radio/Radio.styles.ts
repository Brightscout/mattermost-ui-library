import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

import {RadioSizeTypes} from './Radio';

export const RadioContainer = styled.div<{ size: RadioSizeTypes }>(
    ({size}) => {
        const increaseRadioSizeBy = {
            sm: 0,
            md: 2,
            lg: 4,
        };

        return {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8 + increaseRadioSizeBy[size],

            '.radio-label': {
                margin: 0,
                color: Colors.centerChannel,
                fontSize: 12 + increaseRadioSizeBy[size],
                fontWeight: 'inherit',
            },

            '.radio-label[for]': {
                cursor: 'pointer',
            },

            '.input-wrapper': {
                width: 12 + (2 * increaseRadioSizeBy[size]),
                height: 12 + (2 * increaseRadioSizeBy[size]),
            },

            '.mm-radio-active': {
                width: 6 + increaseRadioSizeBy[size],
                height: 6 + increaseRadioSizeBy[size],
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
        };
    },
);

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
        margin: 0,
        border: `1px solid ${Colors.centerChannel_24}`,
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: Colors.centerChannelBg,

        '&:focus': {
            outline: 'none',
        },

        '&:focus-visible': {
            outline: '-webkit-focus-ring-color auto 1px',
            outlineOffset: '2px',
        },
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
