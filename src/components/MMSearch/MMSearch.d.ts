import {IconType} from '@Components/Icon';
import {InputProps} from '@Components/Input/Input';
import {ListItemType} from '@Components/List/List';
import {SecondaryLabelPositionType} from '@Components/MenuItem/MenuItem';

export interface MMSearchProps extends Pick<InputProps, 'component' | 'disableResize' | 'rows' | 'removeCloseButton'> {

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
     * @default false
     */
    openOptions?: boolean;

    /**
	 * Position of the secondary label
	 */
    secondaryLabelPosition?: SecondaryLabelPositionType;

    /**
     * Function used to handle onKeyPress functionality of input
     */
    onKeyPress?: React.KeyboardEventHandler<unknown>;

    /**
     * Function used to handle clear input functionality
     */
    onClearInput?: () => void;

    /**
	 * Pass in ref object for the input component.
	 */
    inputRef?: React.MutableRefObject<unknown>;
}
