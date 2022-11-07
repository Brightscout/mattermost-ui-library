import React from 'react';

import {extendClassname} from '@Utils';

import {CircularSkeleton, RectangularSkeleton, SkeletonProps} from './Skeleton';
import {StyledSkeleton} from './Skeleton.styles';

/**
 * Skeleton Component
 *
 * Component which shows loading state when rendered.
 * Takes up the full container size if dimensions not passed in explicitly
 *
 * @example Correct usage with circular variant
 * ```ts
 * <Skeleton variant='circular' />
 * ```
 *
 * @example Correct usage with rectangular variant
 * ```ts
 * <Skeleton variant='rectangular' />
 * ```
 */
export const Skeleton = (props: SkeletonProps) => {
    const {variant} = props;

    // If variant passed in is `circular`
    if (variant === 'circular') {
        return (
            <StyledSkeleton
                className={`mm-skeleton ${extendClassname({[variant]: true})}`}
                size={((props as CircularSkeleton).size ?? '100%')}
            />);
    }

    // If variant passed in is `rectangular`
    return (
        <StyledSkeleton
            className={`mm-skeleton ${extendClassname({[variant]: true})}`}
            height={((props as RectangularSkeleton).height ?? '100%')}
            width={((props as RectangularSkeleton).width ?? '100%')}
            borderRadius={((props as RectangularSkeleton).borderRadius ?? 0)}
        />);
};
