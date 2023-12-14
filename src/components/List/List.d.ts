import {IconType} from '@Components/Icon';
import {SecondaryLabelPositionType} from '@Components/MenuItem/MenuItem';

/**
 * List item type
 */
export type ListItemType = {

    /**
	 * Label for the list item
	 */
    label?: string;

    /**
	 * Value for the list item
	 */
    value: string;

    /**
     * Secondary label for the list item
     */
    secondaryLabel?: string;

    /**
	 * Icon Name for the list item
	 */
    icon?: Exclude<IconType, 'Spinner'> | JSX.Element;

    /**
     * Element to show before the label
     */
    showBeforeLabelElement?: JSX.Element;
};

/**
 * Interface for list props
 */
export interface ListPropType {

    /**
	 * An array of listItem object
	 */
    listItems: ListItemType[];

    /**
	 * Selected value of the component in which the list component is used
	 */
    value: string;

    /**
	 * If `true`, then list will open
	 */
    isOpen: boolean;

    /**
	 * If `true`, then instead of listItem value `loading..` text will be shown
	 */
    loading?: boolean;

    /**
	 * If `true`, then List is being used in Autocomplete component
	 */
    isAutocomplete?: boolean;

    /**
	 * The index of active menu item
	 */
    activeItem?: number;

    /**
     * Position of the secondary label
     */
    secondaryLabelPosition?: SecondaryLabelPositionType;

    /**
	 * The handler called when any List item is selected
	 *
	 * @param event - Element in which the event have happened
	 * @param option - Option which the user have selected
	 */
    handleItemClick: (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        option: ListItemType,
        index: number
    ) => void;
}
