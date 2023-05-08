import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {ButtonColorMap, ButtonSizeMap, StyledButtonProps} from './Button';

/**
 * Styled container for the Button to configure according to props
 */
export const StyledButtonContainer = styled.button<StyledButtonProps>(({variant, fullWidth, iconPosition, size = 'md', inverted, destructive, width}) => {
    // button styles depending on different button sizes
    const buttonStyles: ButtonSizeMap = {
        xs: {
            padding: '6px 10px',
            focusPadding: variant === 'secondary' ? '5px 9px' : '4px 8px',
            fontSize: '10px',
            height: '24px',
            lineHeight: '9px',
        },
        sm: {
            padding: '10px 16px',
            focusPadding: variant === 'secondary' ? '9px 15px' : '8px 14px',
            fontSize: '12px',
            height: '32px',
            lineHeight: '10px',
        },
        md: {
            padding: '12px 20px',
            focusPadding: variant === 'secondary' ? '11px 19px' : '10px 18px',
            fontSize: '14px',
            height: '40px',
            lineHeight: '14px',
        },
        lg: {
            padding: '14px 24px',
            focusPadding: variant === 'secondary' ? '13px 23px' : '12px 22px',
            fontSize: '16px',
            height: '48px',
            lineHeight: '17px',
        },
    };

    const invertedColorMap: ButtonColorMap = {
        primary: {
            default: colors.primaryText,
            hover: colors.primaryText,
            active: colors.primaryText,
            disabled: colors.centerChannel_8,
        },
        secondary: {
            default: 'transparent',
            hover: colors.primaryText_8,
            active: colors.primaryText_16,
            disabled: 'transparent',
        },
        tertiary: {
            default: colors.primaryText_8,
            hover: colors.primaryText_12,
            active: colors.primaryText_16,
            disabled: colors.centerChannel_8,
        },
        quaternary: {
            default: 'transparent',
            hover: colors.primaryText_8,
            active: colors.primaryText_12,
            disabled: 'transparent',
        },
        text: {
            default: 'transparent',
            hover: 'transparent',
            active: colors.primaryText_16,
            disabled: 'transparent',
        },
    };

    const destructiveColorMap: ButtonColorMap = {
        primary: {
            default: colors.error,
            hover: colors.error,
            active: colors.error,
            disabled: colors.centerChannel_8,
        },
        secondary: {
            default: 'transparent',
            hover: colors.error_8,
            active: colors.error_8,
            disabled: 'transparent',
        },
        tertiary: {
            default: colors.error_8,
            hover: colors.error_12,
            active: colors.error_16,
            disabled: colors.centerChannel_8,
        },
        quaternary: {
            default: 'transparent',
            hover: colors.error_8,
            active: colors.error_12,
            disabled: 'transparent',
        },
        text: {
            default: 'transparent',
            hover: 'transparent',
            active: colors.error_16,
            disabled: 'transparent',
        },
    };

    const defaultColorMap: ButtonColorMap = {
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
        text: {
            default: 'transparent',
            hover: 'transparent',
            active: colors.primary_16,
            disabled: 'transparent',
        },
    };

    // button styles depending upon prop
    const getButtonStyle = ((): ButtonColorMap => {
        if (destructive) {
            return destructiveColorMap;
        } else if (inverted) {
            return invertedColorMap;
        }
        return defaultColorMap;
    })();

    // button text and border color
    const buttonTextColor = ((): string => {
        if (destructive) {
            return colors.error;
        } else if (inverted) {
            return variant === 'primary' ? colors.primary : colors.primaryText;
        }
        return colors.primary;
    })();

    // focus styles for quaternary variant
    const getQuaternaryButtonFocus = () => {
        if (destructive) {
            return colors.error_16;
        } else if (inverted) {
            return colors.primaryText_16;
        }
        return colors.primary_16;
    };

    const padding = () => {
        switch (variant) {
        case 'text':
            return '4px';
        default:
            return buttonStyles[size].padding;
        }
    };

    const focus = () => {
        switch (variant) {
        case 'quaternary':
            return {backgroundColor: getQuaternaryButtonFocus()};
        case 'text':
            return {
                border: `2px solid ${colors.buttonFocusBorder}`,
                backgroundColor: getButtonStyle[variant].default,
                padding: '2px',
            };
        default:
            return {
                border: `2px solid ${colors.buttonFocusBorder}`,
                backgroundColor: getButtonStyle[variant].default,
                padding: buttonStyles[size].focusPadding,
            };
        }
    };

    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : width,
        boxSizing: 'border-box',
        cursor: 'pointer',
        lineHeight: buttonStyles[size].lineHeight,
        fontSize: buttonStyles[size].fontSize,
        fontWeight: '600',
        height: variant === 'text' ? 'auto' : buttonStyles[size].height,
        borderRadius: variant === 'text' ? 0 : '4px',
        border: variant === 'secondary' ? `1px solid ${buttonTextColor}` : 'none',
        padding: padding(),
        color: !inverted && variant === 'primary' ? colors.primaryText : buttonTextColor,
        backgroundColor: getButtonStyle[variant].default,

        '& .mm-icon': {
            display: 'inline',
            marginInline: iconPosition === 'start' ? '0 8px' : '8px 0',
            '& path , & rect': {
                color: !inverted && variant === 'primary' ? colors.primaryText : buttonTextColor,
            },
        },

        ':hover': {
            backgroundColor: getButtonStyle[variant].hover,
        },

        ':active': {
            backgroundColor: getButtonStyle[variant].active,
        },

        ':focus': focus(),

        ':disabled': {
            color: colors.centerChannel_32,
            background: getButtonStyle[variant].disabled,
            borderColor: colors.centerChannel_32,
            pointerEvents: 'none',
            cursor: 'default',

            '& .mm-icon path': {
                color: colors.centerChannel_32,
            },
        },
    };
});

