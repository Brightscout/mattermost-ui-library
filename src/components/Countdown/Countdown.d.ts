export interface CountdownProps {

    /**
     * Time at which countdown will end in milliseconds
     */
    endTime: number;

    /**
     * Flag to show days in timer
     * @default false
     */
    showDays?: boolean;

    /**
     * Flag to show hours in timer
     * @default false
     */
    showHours?: boolean;

    /**
     * Flag to show minutes in timer
     * @default false
     */
    showMinutes?: boolean;

    /**
     * Flag to show seconds in timer
     * @default false
     */
    showSeconds?: boolean;

    /**
	 * To override or extend the styles applied to the component
	 */
    className?: string;
}