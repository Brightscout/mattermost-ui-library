import {Button, FormControl} from 'react-bootstrap';

import {IconType} from '@Components/Icon';

export interface InputProps {

    /**
	 * Name of the icon from the icon map
	 */
    iconName?: IconType;

    /**
	 * Label for the input field
	 */
    label: string;

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
	 * If `true`, the input will indicate an error
	 *
	 * @default false
	 */
    error?: boolean;

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
	 * Handler that's called when there is a change in the value of the input field
	 */
    onChange?: (event: React.FormEvent<FormControl & HTMLInputElement>) => void;
}
