import React from 'react';

import { IconType } from '@Components/Icon';
import { InputProps } from '@Components/Input/Input';

export interface AutoCompleteProps
	extends Partial<
		Pick<
			InputProps,
			| 'component'
			| 'disableResize'
			| 'rows'
			| 'removeCloseButton'
			| 'value'
			| 'onKeyDown'
		>
	> {
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
		event:
			| React.MouseEvent<HTMLLIElement, MouseEvent>
			| React.KeyboardEvent<HTMLElement>,
		option: ListItemType
	) => void;
}
