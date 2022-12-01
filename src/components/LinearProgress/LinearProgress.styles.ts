import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';
// eslint-disable-next-line no-console
console.log(styled);

// Styles based on progress bar
export const StyledProgressBarContainer = styled.div<{color?: string}>(
    ({color}) => {
        return {
            '& .progress': {
                position: 'relative',
                height: '4px',
                boxShadow: 'none',

                '.progress-bar': {
                    borderRadius: '12px',
                    backgroundColor: color ?? colors.primary,
                },

                // If determinate is false | undefined , animation is added to the progress bar
                '&.linear_loader .progress-bar': {
                    width: '50%',
                    position: 'absolute',
                    inset: '0 0 0',
                    transition: 'transform 0.2s linear',
                    animation: 'loaderAnimation 1.8s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',
                },

                '@keyframes loaderAnimation': {
                    '0%': {
                        left: '-100%',
                        right: '100%',
                    },
                    '60%': {
                        left: '100%',
                        right: '-90%',
                    },
                    '100%': {
                        left: '100%',
                        right: '-90%',
                    },
                },
            },
        };
    },
);
