import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {CheckboxSizeTypes} from './CheckBox';

/**
 * Styled container to hold the checkbox and label for component
 */
export const CheckboxContainer = styled.div<{size: CheckboxSizeTypes}>(({size}) => {
    const increaseCheckboxSizeBy = {
        sm: 0,
        md: 2,
        lg: 4,
    };

    return {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8 + increaseCheckboxSizeBy[size],

        '.checkbox-label': {
            margin: 0,
            color: colors.centerChannel,
            fontSize: 12 + increaseCheckboxSizeBy[size],
            lineHeight: `${16 + (2 * increaseCheckboxSizeBy[size])}px`,
            fontWeight: 400,
        },

        '.input-wrapper': {
            width: 12 + (2 * increaseCheckboxSizeBy[size]),
            height: 12 + (2 * increaseCheckboxSizeBy[size]),
        },

        // Error state
        '&.mm-checkbox-error': {
            '.mm-checkbox-input, .mm-checkbox-input:checked': {
                borderColor: colors.error,

                '&:hover': {
                    borderColor: colors.error,
                },

                '&:focus': {
                    borderColor: colors.error,
                },
            },

            '.mm-checkbox-active': {
                backgroundColor: colors.error,
            },
        },

        // Disabled state
        '&.mm-checkbox-disabled': {
            '.checkbox-label': {
                opacity: '40%',
            },
            '.checkbox-label[for]': {
                cursor: 'default',
            },
        },
    };
});

export const InputContainer = styled.div({
    display: 'inline-block',
    position: 'relative',

    // Styles of checkbox input on the basis of `size` prop
    '& .mm-checkbox-input': {
        appearance: 'none',
        display: 'block',
        height: 'inherit',
        width: 'inherit',
        border: `1px solid ${colors.centerChannel_24}`,
        cursor: 'pointer',
        borderRadius: 4,
        margin: 0,
        backgroundColor: colors.centerChannelBg,

        '&:hover': {
            borderColor: colors.centerChannel_40,
        },

        '&:active': {
            borderColor: colors.centerChannel_48,
            filter: 'none',
        },

        '&:focus': {
            borderColor: colors.primary,
            boxShadow: 'none',
            outline: 'none',
        },
    },

    // styles for checkbox input on disabled state
    '& .mm-checkbox-input[disabled]': {
        backgroundColor: 'unset',
        pointerEvents: 'none',
        cursor: 'default',
    },

    // styles for checkbox input on checked state
    '& .mm-checkbox-input:checked': {
        borderColor: colors.primary,
    },

    '& .mm-checkbox-input[disabled].mm-checkbox-input:checked': {
        borderColor: colors.centerChannel_24,
    },

    '& .mm-checkbox-active': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        inset: '0 0 0',
        margin: 'auto',
        borderRadius: 4,
        transform: 'scale(0)',
        transition: 'transform 100ms cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: 'none',
        backgroundColor: colors.primary,

        '.mm-icon': {
            '& svg': {
                fill: colors.centerChannelBg,
            },
            '& path, & rect': {
                color: colors.centerChannelBg,
            },
        },
    },

    '& .mm-checkbox-input[disabled] ~ .mm-checkbox-active': {
        backgroundColor: colors.centerChannel_48,
    },

    // Styles of input checkbox active on checked state
    '& .mm-checkbox-input:checked ~ .mm-checkbox-active': {
        transform: 'scale(1)',
    },
});
