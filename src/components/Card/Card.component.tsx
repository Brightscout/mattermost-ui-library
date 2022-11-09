import React from 'react';

import {CardProps} from './Card';
import {CardWrapper} from './Card.styles';

/**
 * Card Component
 *
 * @example Correct usage
 *
 * ```ts
 * <Card> Content </Card>
 * ```
 */
export const Card = (props: CardProps) => {
    const {children, className = ''} = props;

    return <CardWrapper className={`mm-card ${className}`}>{children}</CardWrapper>;
};
