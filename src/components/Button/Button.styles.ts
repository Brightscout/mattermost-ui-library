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
                fill: colors.buttonColorPrimary,
            },
            ':hover:enabled': {
                cursor: 'pointer',
                backgroundColor: colors.buttonPrimaryHover,
            },
            ':active:enabled': {
                backgroundColor: colors.buttonPrimaryActive,
            },
            ':disabled': {
                backgroundColor: colors.buttonDisabledBgColor,
                '& path , & rect': {
                    fill: colors.buttonDisabledBgColor,
                },
            },
        };
    case 'secondary':
        return {
            backgroundColor: 'transparent',
            border: `1px solid ${colors.buttonBgColor}`,
            ':hover:enabled': {
                cursor: 'pointer',
                backgroundColor: colors.buttonSecondaryHover,
            },
            ':active:enabled': {
                backgroundColor: colors.buttonSecondaryActive,
            },
        };
    case 'tertiary':
        return {
            backgroundColor: colors.buttonBgColorSecondary,
            ':hover:enabled': {
                cursor: 'pointer',
                backgroundColor: colors.buttonTertiaryHover,
            },
            ':active:enabled': {
                backgroundColor: colors.buttonSecondaryActive,
            },
            ':disabled': {
                color: colors.buttonDisabledColor,
                backgroundColor: colors.buttonDisabledBgColor,
                '& path , & rect': {
                    fill: colors.buttonDisabledColor,
                },
            },
        };
    case 'quaternary':
        return {
            backgroundColor: 'transparent',
            ':hover:enabled': {
                cursor: 'pointer',
                backgroundColor: colors.buttonSecondaryHover,
            },
            ':active:enabled': {
                backgroundColor: colors.buttonTertiaryHover,
            },
            ':focus:enabled': {
                backgroundColor: colors.buttonSecondaryActive,
                borderColor: 'transparent',
            },
            ':disabled': {
                color: colors.buttonDisabledColor,
                borderColor: 'transparent',
                '& path , & rect': {
                    fill: colors.buttonDisabledColor,
                },
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
        padding: '11px 24px',
        borderRadius: '4px',
        lineHeight: '16px',
        fontSize: '14px',
        fontWeight: '600',
        height: '40px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        width: fullWidth ? '100%' : width,
        color: colors.buttonBgColor,
        '& div': {
            display: 'inline',
            marginInline: iconPosition === 'start' ? '0 10px' : '10px 0',
            height: '16px',
            '& svg': {
                height: '16px',
                width: '16px',
            },
        },
        '& path , & rect': {
            fill: colors.buttonBgColor,
        },
        ':focus:enabled': {
            border: `2px solid ${colors.buttonFocusBorder}`,
        },
        ':disabled': {
            color: colors.buttonDisabledColor,
            borderColor: colors.buttonDisabledColor,
            '& path , & rect': {
                fill: colors.buttonDisabledBgColor,
            },
        },
        ...variantStyle,
    };
});

