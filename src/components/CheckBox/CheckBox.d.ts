/**
 * Interface for styled selector
 */
export interface StyledSelectorProps {

    /**
     * if 'true' input is checked
     * @default false
     */
    checked?:boolean;

    /**
     * if 'true' checkbox is in error state
     * @default false
     */
    error?:boolean;
}

/**
 * Interface for styled checkbox container
 */
export interface StyledCheckBoxContainerProps extends StyledSelectorProps{

    /**
    * if 'true' checkbox is disabled
    * @default false
    */
    disabled?:boolean;
}

/**
 * Interface for styled input of type checkbox
 */
export interface StyledCheckBoxProps extends StyledCheckBoxContainerProps {

    /**
     * The id for current checkbox
     */
    id:string;

    /**
     * name for the current checkbox
     */
    name:string;

    /**
     * value associated with current checkbox
     */
    value:string;
}

/**
 * Interface for CheckBox Component
 */
export interface CheckBoxProps extends StyledCheckBoxProps{

    /**
     * Label associated with current checkbox
     */
    label:string;
}

