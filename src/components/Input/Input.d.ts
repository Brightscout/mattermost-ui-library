import {IconType} from '@Components/Icon';

export interface InputProps {

    /**
		 * Name of the icon from the icon map
		 */
    iconName?: IconType;

    /**
		 * label for the input field
		 */
    label: string;

    /**
		 * If `true`, the icon color will be disabled color
		 *
		 * @default false
		 */
    disabled?: boolean;

    /**
		 * If `true`, the input element is focused during the first mount.
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
		 * If `true`, the input will take up the full width of its container.
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
		 * The name applied to the input element
		 *
		 * @default 'text'
		 */
    type?: string;

    /**
		 * It prevents the user from changing the value of the field
		 * @default false
		 */
    readOnly?: boolean;

    /**
		 * If `true`,  the input element is required
		 * @default false
		 */
    required?: boolean;

    /**
		 * The value of the input field
		 */
    value?: string | number;

    /**
		 * Handler that's called when there is a change in the value of the input field
		 */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
