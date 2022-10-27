import React from 'react';

import {Icon} from '@Components/Icon';

import {SizeMapType, SpinnerProps} from './Spinner';
import {SpinnerContainer} from './Spinner.styles';

/**
 * Spinner Component
 *
 * @example Correct usage
 *
 * ```ts
 * <Spinner />
 * ```
 *
 * @example usage with overlay ,size and color
 *
 * ```ts
 * <Spinner overlay size='md' color='green' />
 * ```
 */
export const Spinner = (props: SpinnerProps) => {
    const {size = 'xl', overlay = false, color, className = ''} = props;
    const sizeMap: SizeMapType = {
        xs: 10,
        sm: 12,
        md: 16,
        lg: 20,
        xl: 28,
        '2xl': 32,
    };

    return (
        <SpinnerContainer
            overlay={overlay}
            color={color}
            className={`mm-spinner ${className}`}
        >
            <Icon
                name='Spinner'
                iconColor='transparent'
                size={sizeMap[size]}
            />
        </SpinnerContainer>
    );
};
