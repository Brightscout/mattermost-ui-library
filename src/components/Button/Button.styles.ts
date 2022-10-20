import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {ButtonColorMap, StyledButtonProps} from './Button';

/**
 * Styled container for the Button to configure according to props
 */
export const StyledButtonContainer = styled.button<StyledButtonProps>(({variant, fullWidth, iconPosition}) => {
    const colorMap: ButtonColorMap = {
        primary: {
            default: colors.primary,
            hover: colors.buttonPrimaryHover,
            active: colors.buttonPrimaryActive,
            disabled: colors.centerChannel_8,
        },
        secondary: {
            default: 'transparent',
            hover: colors.primary_8,
            active: colors.primary_16,
            disabled: 'transparent',
        },
        tertiary: {
            default: colors.primary_8,
            hover: colors.primary_12,
            active: colors.primary_16,
            disabled: colors.centerChannel_8,
        },
        quaternary: {
            default: 'transparent',
            hover: colors.primary_8,
            active: colors.primary_12,
            disabled: 'transparent',
        },
    };

    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : 'fit-content',
        boxSizing: 'border-box',
        cursor: 'pointer',
        lineHeight: '16px',
        fontSize: '14px',
        fontWeight: '600',
        height: '40px',
        borderRadius: '4px',

        // Styles based on variant
        border: variant === 'secondary' ? `1px solid ${colors.primary}` : 'none',
        padding: variant === 'secondary' ? '11px 19px' : '12px 20px',
        color: variant === 'primary' ? colors.primaryText : colors.primary,
        backgroundColor: colorMap[variant].default,

        // Style for button icon
        '& .mm-icon': {
            display: 'inline',
            marginInline: iconPosition === 'start' ? '0 8px' : '8px 0',
            '& path , & rect': {
                color: variant === 'primary' ? colors.primaryText : colors.primary,
            },
        },

        // Style on hover
        ':hover': {
            backgroundColor: colorMap[variant].hover,
        },

        // Style when button is active
        ':active': {
            backgroundColor: colorMap[variant].active,
        },

        // Style when button is focused
        ':focus': variant === 'quaternary' ? {backgroundColor: colors.primary_16} : {
            border: `2px solid ${colors.buttonFocusBorder}`,
            backgroundColor: colorMap[variant].default,
            padding: '10px 18px',
        },

        // Style when button is disabled
        ':disabled': {
            color: colors.centerChannel_32,
            background: colorMap[variant].disabled,
            borderColor: colors.centerChannel_32,
            pointerEvents: 'none',
            cursor: 'default',

            '& .mm-icon path': {
                color: colors.centerChannel_32,
            },
        },
    };
});

