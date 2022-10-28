import styled from 'styled-components';
import {ProgressBar} from 'react-bootstrap';

import colors from '@Styles/colorsForJs.module.scss';

import {StyledProgressBarProps} from './LinearProgress';

// Styles based on progress bar
export const StyledProgressBar = styled(ProgressBar)<StyledProgressBarProps>(
    ({color}) => {
        return {
            position: 'relative',
            height: '4px',

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
                animation:
                          'loaderAnim 1.8s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',
            },

            '@keyframes loaderAnim': {
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
        };
    },
);
