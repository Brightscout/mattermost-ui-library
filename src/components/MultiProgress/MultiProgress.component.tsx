import React, {useMemo} from 'react';

import {ProgressBar} from 'react-bootstrap';

import {MultiProgressBarProps, ProgressBarProps} from './MultiProgress';
import {StyledMultiProgressBarContainer} from './MultiProgress.styles';

/**
 * MultiProgress Component
 *
 * @example Correct usage for MultiProgress
 *
 * ```ts
 * <MultiProgress
 *      progressBarConfig={[{key:0, value: 10, color: 'red'}, {key:1, value: 7, color: 'blue'}, {key:2, value: 3, color: 'green'}]}
 * />
 * ```
 *
 */
export const MultiProgress = (props: MultiProgressBarProps) => {
    const {progressBarConfig, className} = props;

    // sum of progress of all progress bars
    const totalValue = useMemo(() => {
        let total = 0;
        progressBarConfig.forEach((bar: ProgressBarProps) => {
            total += bar.value;
        });
        return total;
    }, [progressBarConfig]);

    return (
        <StyledMultiProgressBarContainer>
            <ProgressBar className={`mm-multiProgress ${className}`}>
                {progressBarConfig.map((bar: ProgressBarProps) => (
                    <ProgressBar
                        key={bar.key}
                        now={(bar.value / totalValue) * 100}
                        style={{
                            backgroundColor: bar.color,
                        }}
                    />
                ))}
            </ProgressBar>
        </StyledMultiProgressBarContainer>
    );
};
