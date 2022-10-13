import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {
    StyledCheckBoxContainerProps,
    StyledCheckBoxProps,
    StyledSelectorProps,
} from './CheckBox';

/**
 * Styled container to hold the checkbox and label for component
 */
export const StyledCheckBoxContainer = styled.label<StyledCheckBoxContainerProps>(({disabled, checked}) => {
    const disabledStyles = disabled ? ({
        color: `${colors.buttonDisabledColor}`,
    } as React.CSSProperties) : null;

    return {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '14px',
        lineHeight: '20px',
        ':hover span': {
            borderColor:
				checked || disabled ? 'transparent' : `${colors.checkboxHoverBorderColor}`,
        },
        ...disabledStyles,
    };
});

/**
 * Styled input of type checkbox
 */
export const StyledCheckBox = styled.input.attrs({
    type: 'checkbox',
})<StyledCheckBoxProps>({
    visibility: 'hidden',
    marginRight: '10px',
});

/**
 * Styled selector for checkbox
 */
export const StyledSelector = styled.span<StyledSelectorProps>(
    ({checked, error}) => {
        const checkedStyles = checked ? ({
            backgroundColor: `${colors.buttonBgColor}`,
            borderColor: `${colors.buttonBgColor}`,
            '&::after': {
                content: '""',
                height: '100%',
                position: 'absolute',
                transition: 'all 0.2s ease-in-out ',
                transform: 'scale(1)',
                width: '100%',
                background: 'white',
                clipPath:
							'polygon(20% 50%, 38% 69%, 85% 28%, 90% 34%, 37% 80%, 14% 55%)',
            },
        } as React.CSSProperties) : null;

        return {
            position: 'absolute',
            display: 'block',
            height: '16px',
            width: '16px',
            borderRadius: '2px',
            transition: 'all 0.2s ease-in-out ',
            backgroundColor: `${colors.buttonColorPrimary}`,
            border: `1px solid ${
                error && !checked ? colors.checkboxErrorBorderColor : colors.checkboxBorderColor
            }`,
            ':hover:enabled': {
                borderColor: checked ? 'transparent' : `${colors.checkboxHoverBorderColor}`,
            },
            '&::after': {
                content: '""',
                height: '100%',
                position: 'absolute',
                transition: 'all 0.2s  ease-in-out',
                transform: 'scale(0)',
                width: '100%',
                background: 'white',
                clipPath:
					'polygon(20% 50%, 38% 69%, 85% 28%, 90% 34%, 37% 80%, 14% 55%)',
            },
            ...checkedStyles,
        };
    },
);
