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

	/**
	 * If `true`, the select will indicate an error
	 *
	 * @default false
	*/
    error?: boolean;
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
	 * The value of the select field
	 */
	value?: string;

	/**
	 * options for the select component
	 * rendered in the dropdown
	 */
	options: ListItemType[];

	/**
	 * To override or extend the styles applied to the component
	 */
	className?: string;

	/**
	 * If `true`, value in select field is required
	 *
	 * @default false
	 */
	required?: boolean;

	/**
	 * If `true`, the select will indicate an error
	 *
	 * @default false
	 */
	error?: boolean;

	/**
	 * @param e - Element where the event has happened
	 * @param option - Option selected by the user
	 */
	onSelectOptionHandler: (
		e: React.MouseEvent<HTMLLIElement, MouseEvent> | KeyboardEvent<HTMLInputElement>,
		option: ListItemType
	) => void;
}
