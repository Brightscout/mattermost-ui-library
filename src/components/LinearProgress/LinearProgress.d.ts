/**
 * Interface for StyledProgressBar
 */
export interface StyledProgressBarProps {
	/**
	 * Determinate state for linear progress bar component
	 *
	 * If `true` the indicator increases in width according to value passed
	 */
	determinate?: boolean;

	/**
	 * Color of the spinner based on available options
	 * @default var(--button-bg)
	 */
	color?: string;
}

/**
 * Interface for LinearProgress Component
 */
export interface LinearProgressProps extends StyledProgressBarProps {
	/**
	 * Value of the progress in linear progress bar component
	 */
	value?: number;

	/**
	 * To override or extend the styles applied to the component
	 */
	className?: string;
}
