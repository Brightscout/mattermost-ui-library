/**
 * Interface for StyledProgressBarProps
 */
export interface StyledProgressBarProps {

    /**
     * Determinate State for LinearProgressBar Component
     *
     * If true the indicator increases in width according to value passed
     *
     * @default undefined
     */
    determinate?: boolean;

    /**
        * Color of the spinner based on available options
        * @default var(--button-bg)
        */
    color?: string;
}

export interface LinearProgressProps extends StyledProgressBarProps {

    /**
     * Value of the progress in LinearProgressBar Component
     *
     * @default undefined
     */
    value?: number;

    /**
     * To override or extend the styles applied to the component
     */
    className?: string;
}
