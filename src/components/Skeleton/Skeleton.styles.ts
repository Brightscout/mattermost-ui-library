import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

import {StyledSkeletonProps} from './Skeleton';

// Styles for skeletonContainer
export const StyledSkeleton = styled.div<StyledSkeletonProps>(({size, height, width, borderRadius}) => {
    return {
        animation: '1500ms ease-in-out infinite skeletonFade',
        backgroundColor: `rgba(${Colors.centerChannelRgb}, 0.08)`,

        // Styles for skeleton if variant is circular
        '&.circular': {
            width: size,
            height: size,
            borderRadius: '50%',
        },

        // Styles for skeleton if variant is rectangular
        '&.rectangular': {
            height,
            width,
            borderRadius,
        },

        '@keyframes skeletonFade': {
            '0%': {
                backgroundColor: `rgba(${Colors.centerChannelRgb}, 0.08)`,
            },
            '50%': {
                backgroundColor: `rgba(${Colors.centerChannelRgb}, 0.16)`,
            },
            '100%': {
                backgroundColor: `rgba(${Colors.centerChannelRgb}, 0.08)`,
            },
        },
    };
});
