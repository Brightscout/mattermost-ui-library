import {IconType} from '@Components/Icon';

/**
 * Option type
 */
export type OptionType = {
    label?: string;
    value: string;
    iconName?: Exclude<IconType, 'Spinner'>;
};

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
