import {IconType} from '@Components/Icon';
import {ListItemType} from '@Components/List/List';

export interface MMSearchProps {

    /**
     * Label for the component
     */
    label: string;

    /**
     * If `true`, the component is focused during the first mount
     *
     * @default false
     */
    autoFocus?: boolean;

    /**
     * If `true`, the component will take up the full width of it's container.
     *
     * @default false
     */
    fullWidth?: boolean;

    /**
     * A unique id given to the component
     */
    id?: string;

    /**
     * The name applied to the component
     */
    name?: string;

    /**
     * To override or extend the styles applied to the component
     */
    className?: string;

    /**
     * Options to render in the dropdown of the auto complete search list.
     */
    items: ListItemType[];

    /**
     * Leading Icon for the component
     */
    leadingIcon?: Exclude<IconType, 'Spinner'>;

    /**
     * The handler called when any dropdown item is selected
     *
     * @param event - Element in which the event have happened
     * @param option - Option which the user have selected
     */
    onSelect: (
        event: React.MouseEvent<HTMLLIElement, MouseEvent> | KeyboardEvent<HTMLInputElement>,
        option: ListItemType
    ) => void;

    /**
     * Value of the search input component
     */
    searchValue: string;

    /**
     * Function to set search value
     * @param val - value of the input (event.target.value)
     */
    setSearchValue: (val: string) => void;

    /**
     * Loading flag to show whether options are loading
     * @default false
     */
    optionsLoading?: boolean;

    /**
     * Filter dropdown options based on this string. (It will exclude all options which doesn't starts with filterBy string)
     */
    filterBy?: string;

    /**
     * Flag used to open options
     */
    openOptions?: boolean;

    /**
     * Function used to handle onKeyPress functionality of input
     */
    onKeyPress?: () => void;
}
