/**
 * Interface for Styled Switch Container
 */
export interface StyledSwitchContainerProps {

    /**
		* if 'true', Toggle switch occupies full width of it's container
		*
		* @default false
		*/
    fullWidth?:boolean;
}

/**
 * Interface for Switch Component
 */
export interface SwitchProps extends StyledSwitchContainerProps {

    /**
     * The id for current toggle switch
     */
    id?:string;

    /**
      * name for the current toggle switch
      */
    name?:string;

    /**
     * value associated with current toggle switch
     */
    value?:string;

    /**
     * Label associated with current toggle switch
     */
    label:string;

    /**
     * Sub-Label associated with current toggle switch
     */
    subLabel?:string;

    /**
    * if 'true' toggle switch is disabled
    *
    * @default false
    */
    disabled?:boolean;

    /**
     * if 'true' input is checked
     *
     * @default false
     */
    checked?:boolean;

    /**
     * if 'true' toggle switch is in error state
     *
     * @default false
     */
    error?:boolean;

    /**
     * To override or extend the styles applied to the component
     */
    className?: string;

    /**
     * Handler that's called when there is a change in the value of the toggle switch
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
