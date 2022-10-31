/**
 * Interface for Styled Switch Container
 */
export interface StyledSwitchContainerProps {

    /**
		* If `true`, toggle switch occupies full width of it's container
		*
		* @default false
		*/
    fullWidth?: boolean;
}

/**
 * Interface for Switch Component
 */
export interface SwitchProps extends StyledSwitchContainerProps {

    /**
     * The id for toggle switch
     */
    id?: string;

    /**
      * Name for the toggle switch
      */
    name?: string;

    /**
     * Value associated with toggle switch
     */
    value?: string;

    /**
     * Label associated with toggle switch
     */
    label: string;

    /**
     * Sub-Label associated with toggle switch
     */
    subLabel?: string;

    /**
    * If `true` toggle switch is disabled
    *
    * @default false
    */
    disabled?: boolean;

    /**
     * If `true` toggle switch is checked
     *
     * @default false
     */
    checked?: boolean;

    /**
     * If `true` toggle switch is in error state
     *
     * @default false
     */
    error?: boolean;

    /**
     * To override or extend the styles applied to the component
     */
    className?: string;

    /**
     * Handler that's called when there is a change in the value of the toggle switch
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
