import React, {createElement} from 'react';

import {IconProps} from './Icon';
import IconMap from './Icon.map';
import {StyledIconContainer} from './Icon.styles';

/**
 * Icon Component
 *
 * @example Correct usage with default size and color
 * ```ts
 * <Icon name="Unlink" />
 * ```
 *
 * @example Using custom size and color
 * ```ts
 * <Icon name="Unlink" size="36" iconColor="#000" />
 * ```
 */
export const Icon = (props: IconProps) => {
    const {
        name,
        size = 24,
        iconColor,
    } = props;

    return (
        <StyledIconContainer
            className='mm-icon'
            size={size}
            iconColor={iconColor}
        >
            {createElement(IconMap[name])}
        </StyledIconContainer>
    );
};
