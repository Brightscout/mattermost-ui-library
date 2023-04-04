import React from 'react';

import {IconType} from '@Components/Icon';
import {InputProps} from '@Components/Input/Input';

export interface AutoCompleteProps
    extends Pick<InputProps, 'component' | 'disableResize' | 'rows' | 'removeCloseButton'> {

    /**
	 * Label for the component
	 * @default ''
	 */
    label?: string;

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
	 * Options to render in the dropdown of the autocomplete search list.
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
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        option: ListItemType
    ) => void;

    /**
	 * Value of the input component, required for a controlled component.
	 */
    value?: string;

    /**
	 * Handler that's called when there is a change in the value of the input field.
	 * Required for a controlled component.
	 * @param value - changed value
	 */
    onChange?: (value: string) => void;
}
