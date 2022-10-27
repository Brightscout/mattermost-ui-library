import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {StyledContainerProps} from './Icon';

/**
 * Styled container for the icons for configuring the size and color according to the props.
 */
export const StyledIconContainer = styled.div<StyledContainerProps>(({size, iconColor = colors.iconColor}) => ({
    height: size,
    '& svg': {
        display: 'block',
        width: size,
        height: size,
        display: 'block',
    },
    '& path, & rect': {
        color: iconColor,
        strokeOpacity: 'unset',
    },
}));
