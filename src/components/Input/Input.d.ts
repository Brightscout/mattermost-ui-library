import { Button, FormControlProps } from 'react-bootstrap';

import { IconType } from '@Components/Icon';

/**
 * Input's size types
 */
type InputSizeTypes = 'sm' | 'md' | 'lg';

export interface InputProps
	extends Omit<FormControlProps, 'inputRef' | 'bsSize' | 'ref'> {
	/**
	 * If 'true', the input will have a transparent border
	 */
	borderLess?: boolean;

	/**
	 * Input sizes
	 *
	 * @default 'md'
	 */
	size?: InputSizeTypes;

	/**
	 * Name of the icon from the icon map
	 */
	iconName?: IconType;

	/**
	 * Label for the input field
	 * @default ''
	 */
	label?: string;

	/**
	 * If `true`, the input element will be disabled
	 *
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * If `true`, the input element is focused during the first mount
	 *
	 * @default false
	 */
	autoFocus?: boolean;

	/**
	 * If error message string is passed in this prop,
	 * the input will indicate an error
	 *
	 * @default ''
	 */
	error?: string;

	/**
	 * If `true`, the input will take up the full width of it's container.
	 *
	 * @default false
	 */
	fullWidth?: boolean;

	/**
	 * A unique id given to the input element
	 */
	id?: string;

	/**
	 * The name applied to the input element
	 */
	name?: string;

	/**
	 * To override or extend the styles applied to the component
	 */
	className?: string;

	/**
	 * Type of the input element
	 *
	 * @default 'text'
	 */
	type?: string;

	/**
	 * If `true`, prevents the user from changing the value of the field
	 *
	 * @default false
	 */
	readOnly?: boolean;

	/**
	 * If `true`, value in input field is required
	 *
	 * @default false
	 */
	required?: boolean;

	/**
	 * The function is called when an event is detected on the keyboard
	 */
	onKeyDown?: React.KeyboardEventHandler<FormControl & HTMLInputElement>;

	/**
	 * The value of the input field
	 */
	value?: string | number;

	/**
	 * The search query
	 */
	searchQuery?: string;

	/**
	 * Handle trigger on clicking the close icon button
	 */
	onClose?: React.MouseEventHandler<Button>;

	/**
	 * Handler for handling input focus event
	 */
	onInputFocus?: () => void;

	/**
	 * The underlying HTML element to use when rendering the FormControl.
	 * @default 'input'
	 */
	component?: 'input' | 'textarea';

	/**
	 * If `true`, the resize option in the text area will be removed.
	 * @default false
	 */
	disableResize?: boolean;

	/**
	 * The number of rows in the textarea.
	 * @default 2
	 */
	rows?: number;

	/**
	 * If `true`, the close button will be removed.
	 * @default false
	 */
	removeCloseButton?: boolean;
}
