import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {SecondaryLabelPositionType} from './MenuItem';

export const MenuItemWrapper = styled.li(() => {
    return {
        display: 'grid',
        alignItems: 'center',
        cursor: 'pointer',

        /**
         * - If secondary label position is inline then main label moves to the second column
         *   so that secondary label will be stretched to the end and main label will occupy fit-content width.
         *
         * - If secondary label position is block then main label moves to the third column
         *   so that main label will be stretched to the end
         */
        gridTemplateColumns: 'max-content max-content 1fr min-content',
        padding: '8px 16px',

        // alternative to gap: 8px, since we are explicitly defining column gap will be added for columns which are not present
        '& :not(:last-child)': {
            marginRight: '8px',
        },

        '&:hover': {
            background: colors.centerChannel_8,
        },

        '&:active': {
            background: colors.primary_8,
        },

        '&:focus': {
            outline: `2px solid ${colors.buttonFocusBorder}`,
        },

        // TODO: This needs to fixed gloablly in Icon Component
        svg: {
            display: 'block',
        },
    };
});

// Styles for main label
export const Label = styled.span<{
    secondaryLabelPosition?: SecondaryLabelPositionType;
}>(({secondaryLabelPosition}) => {
    return {
        fontSize: 14,
        ...(secondaryLabelPosition === 'block' ? {
            gridColumnStart: 3,
        } : {
            gridColumnStart: 2,
        }),
    };
});

// Styles for secondary label
export const SecondaryLabel = styled.span<{
    secondaryLabelPosition?: SecondaryLabelPositionType;
}>(({secondaryLabelPosition}) => {
    return {
        fontSize: 12,
        color: colors.menuSecondaryText,
        ...(secondaryLabelPosition === 'block' ? {
            gridRowStart: 2,
            gridColumnStart: 3,
        } : {
            gridColumnStart: 3,
        }),
    };
});

