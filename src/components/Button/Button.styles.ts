import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {StyledButtonProps} from './Button';

/**
 * Apply styles according to variant
 * @param variant -  variant of the Button
 * @returns {Object} - styles according to the variant
 */
const variantStyles = (variant:string) => {
    switch (variant) {
    case 'primary':
        return {
            color: colors.buttonColorPrimary,
            backgroundColor: colors.buttonBgColor,
            '& path , & rect': {
                fill: 'transparent',
                stroke: colors.buttonColorPrimary,
                strokeOpacity: 1,
            },
            ':disabled': {
                backgroundColor: colors.buttonDisabledBgColor,
            },
            ':hover': {
                backgroundColor: colors.buttonPrimaryHover,
            },
            ':active': {
                backgroundColor: colors.buttonPrimaryActive,
            },
        };
    case 'secondary':
        return {
            color: colors.buttonBgColor,
            backgroundColor: 'transparent',
            border: `1px solid ${colors.buttonBgColor}`,
            ':hover': {
                backgroundColor: colors.buttonSecondaryHover,
            },
            ':active': {
                backgroundColor: colors.buttonSecondaryActive,
            },
        };
    case 'tertiary':
        return {
            padding: '13px 20px',
            fontSize: '14px',
            lineHeight: '14px',
            color: colors.buttonBgColor,
            backgroundColor: colors.buttonBgColorSecondary,
            ':disabled': {
                backgroundColor: colors.buttonDisabledBgColor,
            },
            ':hover': {
                backgroundColor: colors.buttonTertiaryHover,
            },
            ':active': {
                backgroundColor: colors.buttonSecondaryActive,
            },
        };
    case 'quaternary':
        return {
            padding: '11px 20px',
            fontSize: '14px',
            lineHeight: '20px',
            color: colors.buttonBgColor,
            backgroundColor: 'transparent',
            ':hover': {
                backgroundColor: colors.buttonSecondaryHover,
            },
            ':active': {
                backgroundColor: colors.buttonTertiaryHover,
            },
            ':focus': {
                backgroundColor: colors.buttonSecondaryActive,
                borderColor: 'transparent',
            },
        };
    default:
        return {};
    }
};

/**
 * Styled container for the Button to configure according to props
 */
export const StyledButtonContainer = styled.button<StyledButtonProps>(({variant, fullWidth, width, iconPosition}) => {
    const variantStyle = variantStyles(variant);
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px 24px',
        borderRadius: '4px',
        lineHeight: '18px',
        fontSize: '16px',
        fontWeight: '600',
        maxHeight: '48px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        width: fullWidth ? '100%' : width,
        cursor: 'pointer',
        '& div': {
            display: 'inline',
            marginInline: iconPosition === 'start' ? '0 10px' : '10px 0',
        },
        '& path , & rect': {
            fill: 'transparent',
            stroke: colors.buttonBgColor,
            strokeOpacity: 1,
        },
        ':disabled': {
            color: colors.buttonDisabledColor,
            borderColor: colors.buttonDisabledColor,
            ':focus': {
                border: 'none',
            },
            '& path , & rect': {
                stroke: colors.buttonDisabledColor,
            },
        },
        ':focus': {
            border: `2px solid ${colors.buttonFocusBorder}`,
        },
        ...variantStyle,
    };
});

