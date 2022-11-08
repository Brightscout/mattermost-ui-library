import {IconType} from '@Components/Icon';

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
	 * Icon Name for the list item
	 */	
	icon?: Exclude<IconType, 'Spinner'>;
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
	 * The handler called when any List item is selected
	 *
	 * @param event - Element in which the event have happened
	 * @param option - Option which the user have selected
	 */
	handleItemClick: (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>,
		option: ListItemType
	) => void;
}
