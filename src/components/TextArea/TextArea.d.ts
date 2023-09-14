import type { FormEventHandler } from 'react';
import type { FormControl } from 'react-bootstrap';

export interface TextAreaProps {

    /**
	 * Value of the textarea
	 */
    value: string | number;

    /**
	 * Number of rows for the textarea
	 */
    rows?: number;

    /**
	 * If it has value, the text area will indicate an error with an error message
	 *
	 * @default ""
	 */
    error?: string;

    /**
	 * If `true`, the textarea element will be disabled
	 *
	 * @default false
	 */
    disabled?: boolean;

    /**
	 * If `true`, the textarea element will be readonly
	 *
	 * @default false
	 */
    readOnly?: boolean;

    /**
	 * Label for the text area
	 */
    label: string;

    /**
	 * A unique id given to the textarea element
	 */
    id?: string;

    /**
	 * The name applied to the textarea element
	 */
    name?: string;

    /**
	 * If `true`, value in the textarea is required
	 *
	 * @default false
	 */
    required?: boolean;

    /**
	 * If `true`, the textarea element is focused during the first mount
	 *
	 * @default false
	 */
    autoFocus?: boolean;

    /**
	 * To override or extend the styles applied to the component
	 */
    className?: string;

    /**
	 * Handler called when there is a change in the value of the textarea
	 */
    onChange?: (event: React.ChangeEvent<HTMLInputElement & FormControl>) => void;
}
