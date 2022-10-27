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
 * Options passed in by the user can either be a string or an object with {label: string,value: string } structure
 *
 */
// Todo: Find workaround for string[] | OptionTypeWithLabel[]
export type OptionType = string | OptionTypeWithLabel;

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
    options: OptionType[];

    /**
     * @param e - Element in which the event have happened
     * @param option - Option which the user have been selected
     */
    onSelectOptionHandler: (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        option: string | OptionTypeWithLabel
    ) => void;
}
