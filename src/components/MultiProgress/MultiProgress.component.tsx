import React from 'react';

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
 *      progressBarConfig={[{value: 10, color: 'red'}, {value: 7, color: 'blue'}, {value: 3, color: 'green'}]}
 * />
 * ```
 *
 */
export const MultiProgress = (props: MultiProgressBarProps) => {
    const {progressBarConfig, className} = props;

    // get percentage of progress of a progress bar with respect to progress of all the progress bars
    const getBarFraction = (value: number) => {
        let total = 0;
        progressBarConfig.forEach((bar: ProgressBarProps) => {
            total += bar.value;
        });
        return (value / total) * 100;
    };

    return (
        <StyledMultiProgressBarContainer>
            <ProgressBar className={`mm-multiProgress ${className}`}>
                {progressBarConfig.map((bar: ProgressBarProps, index: number) => (
                    <ProgressBar
                        key={index.toString() + bar.color}
                        now={getBarFraction(bar.value)}
                        style={{
                            backgroundColor: bar.color,
                        }}
                    />
                ))}
            </ProgressBar>
        </StyledMultiProgressBarContainer>
    );
};
