import {IconType} from '@Components/Icon';

/**
 * Type of option with label and value
 */
export type OptionTypeWithLabel = {

    /**
     * Label is showed to the user on selecting the option
     */
    label: string;

    value: string;
}

/**
 * Type of Options
 *
 * Passed in by the user can either be a string array or an array of object with structure {label:string, value:string}
 *
 */
export type OptionsType = string | OptionTypeWithLabel;

/**
 * Interface for input
 */
export interface InputProps {

    /**
     * Leading icon in the select
     */
    leadingIcon?: Exclude<IconType, 'Spinner'>;
}

/**
 * Interface for select component
 */
export interface SelectProps extends InputProps {

    /**
     * Label for the select component
     */
    label: string;

    /**
     * options for the select component
     * rendered in the dropdown
     */
    options: OptionsType[];

    /**
     * @param e - Element in which the event have happened
     * @param option - Option which the user have been selected
     */
    onSelectOptionHandler: (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        option: string | OptionTypeWithLabel
    ) => void;
}
