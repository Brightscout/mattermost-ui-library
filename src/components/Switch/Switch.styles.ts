import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {StyledSwitchContainerProps, SwitchSizeTypes} from './Switch';

/**
 * Styled container to hold the switch and label for component
 */
export const SwitchContainer = styled.div<StyledSwitchContainerProps>(({fullWidth, size = 'md'}) => {
    const increaseSwitchSizeBy = {
        sm: 0,
        md: 2,
        lg: 4,
    };
    return {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: fullWidth ? '100%' : 280,

        // Style for switch labels
        '& .mm-switch-labels': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',

            // Style for label
            '& .mm-switch-label': {
                fontSize: 12 + increaseSwitchSizeBy[size],
                lineHeight: `${16 + (2 * increaseSwitchSizeBy[size])}px`,
                color: colors.centerChannel,
                overflowWrap: 'break-word',
                fontWeight: 400,
                margin: 0,
            },

            // Style for sub-label
            '& .mm-switch-subLabel': {
                fontSize: size === 'lg' ? 14 : 12,
                lineHeight: size === 'lg' ? '20px' : '16px',
                color: colors.centerChannel_72,
                overflowWrap: 'break-word',
                fontWeight: 400,
                margin: 0,
            },
        },

        // Style applied when switch is disabled
        '&.mm-switch-disabled': {
            '.mm-switch-labels': {
                opacity: '40%',
            },
        },

        // Style applied in error state
        '&.mm-switch-error': {
            '.mm-switch-input, .mm-switch-input:checked': {
                borderColor: colors.error,

                '&:hover, &:focus': {
                    borderColor: colors.error,
                },
            },

            '.mm-switch-input:checked': {
                backgroundColor: colors.error,

                ':hover': {
                    backgroundColor: colors.error,
                },
            },
        },

    };
});

export const InputWrapper = styled.div<{size: SwitchSizeTypes}>(({size = 'md'}) => {
    const increaseSwitchSizeBy = {
        sm: 0,
        md: 2,
        lg: 4,
    };

    return {
        display: 'flex',
        margin: '8px 0',

        '& .mm-switch-input': {
            appearance: 'none',
            cursor: 'pointer',
            padding: '2px 0',
            margin: 0,
            height: 16 + (2 * increaseSwitchSizeBy[size]),
            minWidth: 26 + ((size === 'lg' ? 3.5 : 3) * increaseSwitchSizeBy[size]),
            border: '2px solid transparent',
            borderRadius: size === 'lg' ? 12 : 10,
            backgroundColor: colors.centerChannel_32,
            position: 'relative',
            backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'4\' fill=\'%23fff\'/%3e%3c/svg%3e")',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',

            '&:hover': {
                backgroundColor: colors.centerChannel_40,
            },

            '&:active': {
                backgroundColor: colors.centerChannel_48,
                filter: 'none',
            },

            '&:focus': {
                outline: 'none',
                borderColor: colors.primary,
                boxShadow: 'none',
            },

        },

        // Style for disabled switch
        '& .mm-switch-input[disabled]': {
            borderColor: 'transparent',
            backgroundColor: colors.centerChannel_24,
            pointerEvents: 'none',
        },

        '& .mm-switch-input[disabled].mm-switch-input:checked': {
            opacity: '32%',
        },

        // Style for checked switch
        '& .mm-switch-input:checked': {
            border: `2px solid ${colors.primary}`,
            backgroundColor: colors.primary,
            backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'4\' fill=\'%23fff\'/%3e%3c/svg%3e")',
            backgroundPosition: 'right center',

            '&:hover': {
                backgroundColor: colors.buttonPrimaryHover,
            },

            '&:active': {
                backgroundColor: colors.buttonPrimaryActive,
                filter: 'none',
            },

            '&:focus': {
                borderColor: colors.primary_32,
                boxShadow: 'none',
            },
        },

    };
});
