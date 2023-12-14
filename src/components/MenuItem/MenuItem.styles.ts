import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {SecondaryLabelPositionType} from './MenuItem';

export const MenuItemWrapper = styled.li<{disabled?: boolean; destructive?: boolean}>(({disabled = false, destructive = false}) => {
    return {
        display: 'grid',
        alignItems: 'center',
        cursor: 'pointer',

        /**
         * - If the secondary label position is inline then the main label moves to the second column
         *   so that the secondary label will be stretched to the end and the main label will occupy fit-content width.
         *
         * - If the secondary label position is block then the main label moves to the third column
         *   so that the main label will be stretched to the end
         */
        gridTemplateColumns: 'max-content max-content 1fr min-content',
        padding: '8px 16px',

        // alternative to gap: 8px, since we are explicitly defining column gap will be added for columns which are not present
        '& :not(:last-child)': {
            marginRight: '8px',
        },

        '&:hover': {
            background: destructive ? colors.error : colors.centerChannel_8,
            cursor: 'pointer',

            ...(destructive && {
                '.mm-menuItem__label, .mm-menuItem__secondary-label': {
                    color: colors.primaryText,
                },

                '.mm-icon': {
                    '& svg path': {
                        color: colors.primaryText,
                    },
                },
            }),
        },

        '&:active, &.active': {
            background: destructive ? colors.error : colors.primary_8,
        },

        '&:focus': {
            outline: 'none',
            border: `2px solid ${destructive ? colors.error : colors.buttonFocusBorder}`,
        },

        ...(disabled && {
            pointerEvents: 'none',
            opacity: '35%',
        }),

        ...(destructive && !disabled && {
            '.mm-menuItem__label, .mm-menuItem__secondary-label': {
                color: colors.error,
            },

            '.mm-icon': {
                '& svg path': {
                    color: colors.error,
                },
            },
        }),
    };
});

// Styles for the main label
export const Label = styled.span<{
    secondaryLabelPosition?: SecondaryLabelPositionType;
}>(({secondaryLabelPosition}) => {
    return {
        fontSize: 14,
        minWidth: '48px',
        gridColumnStart: secondaryLabelPosition === 'block' ? 3 : 2,
    };
});

// Styles for the secondary label
export const SecondaryLabel = styled.span<{
    secondaryLabelPosition?: SecondaryLabelPositionType;
}>(({secondaryLabelPosition}) => {
    return {
        fontSize: 12,
        color: colors.centerChannel_64,
        gridColumnStart: 3,
        gridRowStart: secondaryLabelPosition === 'block' ? 2 : 'unset',
    };
});
