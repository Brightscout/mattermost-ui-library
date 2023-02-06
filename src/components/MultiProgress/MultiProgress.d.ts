export interface ProgressBarProps {

    /**
	 * Value of the progress in percentage of linear progress bar component
	 */
    value: number;

    /**
	 * Color of the spinner based on available options
	 */
    color: string;
}

export interface MultiProgressBarProps {

    /**
     * Configuration array for the multiple progress bars
     */
    progressBarConfig: ProgressBarProps[];

    /**
	 * To override or extend the styles applied to the component
	 */
    className: string;
}