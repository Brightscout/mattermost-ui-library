import React from 'react';

import {extendClassname} from '@Utils';

import {SkeletonProps} from './Skeleton';
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
                size={(props.size ?? '100%') as string | number}
            />);
    }

    // If variant passed in is `rectangular`
    return (
        <StyledSkeleton
            className={`mm-skeleton ${extendClassname({[variant]: true})}`}
            height={(props.height ?? '100%') as string | number}
            width={(props.width ?? '100%') as string | number}
            borderRadius={(props.borderRadius ?? 0) as string | number}
        />);
};
