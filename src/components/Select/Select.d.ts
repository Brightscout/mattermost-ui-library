import {ListItemType} from '@Components/AutoComplete/AutoComplete';
import {IconType} from '@Components/Icon';

/**
 * Interface for select input field
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
    options: ListItemType[];

    /**
     * @param e - Element where the event has happened
     * @param option - Option selected by the user
     */
    onSelectOptionHandler: (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        option: ListItemType
    ) => void;
}
