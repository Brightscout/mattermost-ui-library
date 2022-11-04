import React from 'react';

import {extendClassname} from '@Utils';

import {LinearProgressProps} from './LinearProgress';
import {StyledProgressBar} from './LinearProgress.styles';

/**
 * LinearProgress
 *
 * @example Correct usage for linear loader
 *
 * ```ts
 * <LinearProgress />
 * ```
 *
 * @example Correct usage for linear progress bar
 *
 * ```ts
 * <LinearProgress determinate value={30} />
 * ```
 *
 */
export const LinearProgress = (props: LinearProgressProps) => {
    const {value, determinate, color, className = ''} = props;
    return (
        <StyledProgressBar
            now={value}
            color={color}
            className={`mm-linearProgress ${className} ${extendClassname({linear_loader: !determinate})}`}
        />
    );
};
