import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {SpinnerContainerProps} from './Spinner';

// Styles based on overlay
export const SpinnerContainer = styled.div<SpinnerContainerProps>(
    ({overlay, color}) => {
        return {
            width: overlay ? '100%' : 'fit-content',
            height: overlay ? '100%' : 'fit-content',
            background: overlay ? colors.overlayBg : 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: color ?? colors.primary,

            svg: {
                display: 'block',
            },
        };
    },
);
