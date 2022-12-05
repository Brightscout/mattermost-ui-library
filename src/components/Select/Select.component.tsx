import React, {MutableRefObject, useEffect, useRef, useState} from 'react';

import {Icon} from '@Components/Icon';
import {List} from '@Components/List';
import {ListItemType} from '@Components/List/List';
import {Constants} from '@Constants';

import {SelectProps} from './Select';
import {
	Input,
	Label,
	LeadingIcon,
	TrailingIcon,
	Wrapper,
} from './Select.styles';

/**
 * Select Component
 *
 * @example Correct usage with options
 *
 * ```ts
 * <Select
 *      label='label'
 *      options=[{value: 'Option1'}, {value: 'Option2'}, {value: 'Option3'}]
 *      onSelectOptionHandler={onUserSelectHandler}
 * />
 * ```
 *
 * @example usage with array of options with {label: string, value: string} structure
 *
 * ```ts
 * <Select
 *      label='label'
 *      options=[{label: 'Label 1', value: 'Option 1'}, {label: 'Label 2', value: 'Option 2'}, {label: 'Label 3', value: 'Option 3'}]
 *      onSelectOptionHandler={onUserSelectHandler}
 * />
 * ```
 *
 * @example usage with leading icon
 *
 * ```ts
 * <Select
 *      label='label'
 *      options=[{value: 'Option1'}, {value: 'Option2'}, {value: 'Option3'}]
 *      leadingIcon='User'
 *      onSelectOptionHandler={onUserSelectHandler}
 * />
 * ```
 * @example usage with options with leading icon
 *
 * ```ts
 * <Select
 *      label='label'
 *      options=[
 *               {label: 'Label 1', value: 'Value 1', iconName: 'Edit'},
 *               {label: 'Label 2', value: 'Value 2', iconName: 'Delete'},
 *               {label: 'Label 3', value: 'Value 3', iconName: 'Globe'}
 *              ]
 *      leadingIcon='User'
 *      onSelectOptionHandler={onUserSelectHandler}
 * />
 * ```
 *
 */
export const Select = (props: SelectProps) => {
	const {leadingIcon, value = '', options, label, className, onSelectOptionHandler, error = false, required = false} = props;

	const [isOpen, setIsOpen] = useState(false);
	const [newValue, setValue] = useState<string>(value);
	const [active, setActive] = useState<number>(0);
	const [selectedIndex, setSelectedIndex] = useState<number>(-1);

	const inputRef = useRef<HTMLInputElement>(
		null
	) as MutableRefObject<HTMLInputElement>;
	const trailingIconRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLUListElement>(
		null
	) as MutableRefObject<HTMLUListElement>;

	/**
	 * On clicking or on focusing the input field
	 * isOpen is set to `true` and the dropdown opens with passed in options
	 */
	const onFocusHandler = () => {
		setIsOpen(true);
	};

	/**
	 * On clicking the trailing icon the dropdown is opened or closed with respect to the state of the select
	 *
	 * if isOpen = `true`  a close icon is rendered, on clicking clears the input field and closes the dropdown
	 * if isOpen = `false` an arrow down is rendered, on clicking opens the dropdown
	 *
	 */
	const onIconTrailingIconClickHandler = () => {
		setValue('');
		setActive(0);
		setSelectedIndex(-1);
		if (isOpen) {
			inputRef.current.blur();
			setIsOpen(false);
		} else {
			inputRef.current.focus();
			setIsOpen(true);
		}
	};

	/**
	 * The function is called when an event is detected on the keyboard,
	 * so you can browse through the list and select one.
	 */
	const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (event.key === 'Enter') {
			const option = options[active];
			setValue(option.label ?? option.value);
			setSelectedIndex(active);
			inputRef.current.blur();
			onSelectOptionHandler(event, option);
			setIsOpen(false);
			return;
		}
		if (event.key === 'ArrowUp') {
			if (active === 0) return;
			setActive((prev) => prev - 1);
			listRef.current.scrollBy(0, -Constants.ITEM_HEIGHT);
			return;
		}
		if (event.key === 'ArrowDown') {
			if (active === options.length - 1) return;
			setActive((prev) => prev + 1);
			listRef.current.scrollBy(0, Constants.ITEM_HEIGHT);
			return;
		}
	};

	/**
	 * On clicking anywhere other than `input field` or `trailing icon` the dropdown closes
	 */
	const onDropDownCloseHandler = (e: MouseEvent) => {
		if (e.target === inputRef.current || e.target === trailingIconRef.current)
			return;
		setIsOpen(false);
	};

	/**
	 * On the user selecting the option the value/label of the menu item is set to the input field
	 */
	const onUserSelectHandler = (
		e: React.MouseEvent<HTMLLIElement, MouseEvent>,
		option: ListItemType,
		index: number
	) => {
		setActive(index);
		setSelectedIndex(index);
		setValue(option.label ?? option.value);
		onSelectOptionHandler(e, option);
	};

	// On clicking anywhere other than the input field the dropdown closes
	useEffect(() => {
		document.body.addEventListener('click', onDropDownCloseHandler);

		return () => {
			document.body.removeEventListener('click', onDropDownCloseHandler);
		};
	}, []);

	/**
	 * If 'isOpen' is true and 'value' is empty, then set the active index to 0 and scroll the list to (0,0)
	 * else, set the active index to selected item index
	 */
	useEffect(() => {
		if (isOpen) {
			if (value === '') {
				setActive(0);
				listRef.current.scrollTo(0, 0);
			} else setActive(selectedIndex);
		}
	}, [isOpen]);

	return (
		<Wrapper className={`mm-select ${className}`}>
			<Input
				ref={inputRef}
				placeholder=' '
				type='text'
				onFocus={onFocusHandler}
				readOnly={true}
				onKeyDown={onKeyDown}
				value={newValue}
				leadingIcon={leadingIcon}
				error={error}
			/>
			<Label leadingIcon={leadingIcon}>{label}{required ? ' *' : ''}</Label>
			{leadingIcon && (
				<LeadingIcon className='select__leading-icon'>
					<Icon name={leadingIcon} size={16}/>
				</LeadingIcon>
			)}
			<TrailingIcon
				className='select__trailing-icon'
				ref={trailingIconRef}
				onClick={onIconTrailingIconClickHandler}
			>
				<Icon name={(isOpen || value) ? 'Close' : 'ArrowDown'} size={16}/>
			</TrailingIcon>
			{options.length > 0 && (
				<List
					ref={listRef}
					isOpen={isOpen}
					listItems={options}
					handleItemClick={onUserSelectHandler}
					value={newValue}
					activeItem={active}
				/>
			)}
		</Wrapper>
	);
};
