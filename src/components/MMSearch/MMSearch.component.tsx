import React, {
	ChangeEvent,
	MutableRefObject,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';

import { Input } from '@Components/Input';
import { List } from '@Components/List';
import { AutoCompleteWrapper } from '@Components/AutoComplete/AutoComplete.styles';

import { Constants } from '@Constants';

import { ListItemType } from '@Components/List/List';

import { MMSearchProps } from './MMSearch';

/**
 * MMSearch Component
 *
 * @example Correct usage
 * ```ts
 * <MMSearch
 *  searchValue=''
 *  setSearchValue={(val)=> {}}
 * 	label='label'
 *  openOptions={true}
 *  item={ [
 * 		{label: 'label 1', value: 'Value 1'},
 * 		{label: 'label 2', value: 'Value 2'},
 * 		{label: 'label 3', value: 'Value 3'},
 * 	]}
 * />
 * ```
 *
 * @example Correct usage for accessing the selected value
 * ```ts
 * <MMSearch
 *  searchValue=''
 *  setSearchValue={(val)=> {}}
 * 	label='label'
 *  optionsLoading={true}
 *  fullWidth={true}
 *  item={[
 * 		{label: 'label 1', value: 'Value 1', icon: 'User'},
 * 		{label: 'label 2', value: 'Value 2', icon: 'User'},
 * 		{label: 'label 3', value: 'Value 3', icon: 'User'},
 * 	]}
 * 	onSelect={(event, options)=> {
 * 		logic to use selected value;
 * 	}}
 * />
 * ```
 */
export const MMSearch = (props: MMSearchProps) => {
	const {
		fullWidth,
		items,
		onSelect,
		label,
		className = '',
		leadingIcon,
		searchValue,
		setSearchValue,
		optionsLoading = false,
		filterBy = '',
		openOptions = false,
		secondaryLabelPosition = null,
		onClearInput,
		onKeyPress,
		inputRef,
		disabled = false,
		...restProps
	} = props;

	const [searchQuery, setSearchQuery] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(openOptions);
	const [active, setActive] = useState<number>(0);

	const ref = useRef<HTMLInputElement | null>(null);
	const listRef = useRef<HTMLUListElement>(
		null
	) as MutableRefObject<HTMLUListElement>;

	/**
	 * On clicking anywhere other than `input field`, the dropdown closes
	 */
	const onDropDownCloseHandler = (e: MouseEvent) => {
		if (
			e.target instanceof HTMLElement &&
			!ref.current?.contains(e.target) &&
			e.target !== ref.current
		) {
			setIsOpen(false);
		}
	};

	// Filter dropdown options based on the input value
	const filteredOptions = useMemo(
		() =>
			filterBy
				? items.filter(
						(item) =>
							item.label?.startsWith(filterBy) && item.label !== filterBy
				  )
				: items,
		[filterBy, items]
	);

	useEffect(() => {
		document.body.addEventListener('click', onDropDownCloseHandler);

		return () => {
			document.body.removeEventListener('click', onDropDownCloseHandler);
		};
	}, []);

	/**
	 * If 'isOpen' is true and 'value' is empty, then set the active index to 0 and scroll the list to (0,0)
	 */
	useEffect(() => {
		if (isOpen) {
			setActive(0);
			if (typeof listRef.current?.scrollTo === 'function') {
				listRef.current.scrollTo(0, 0);
			}
		}
	}, [isOpen]);

	/**
	 * The function is called when an event is detected on the keyboard,
	 * so you can browse through the list and select one.
	 */
	const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (!filteredOptions.length || !isOpen) {
			return;
		}
		if (event.key === Constants.KeyboardEvent.ENTER) {
			event.preventDefault();
			const option = filteredOptions[active];

			if (onSelect) {
				onSelect(event, option);
			}

			setActive(0);
			return;
		}
		if (event.key === Constants.KeyboardEvent.ARROW_UP) {
			event.preventDefault();
			if (active === 0) {
				return;
			}
			setActive((prev) => prev - 1);

			if (listRef.current) {
				listRef.current.scrollBy(0, -Constants.ITEM_HEIGHT);
			}

			if (ref.current) {
				ref.current.focus();
			}
			return;
		}
		if (event.key === Constants.KeyboardEvent.ARROW_DOWN) {
			event.preventDefault();
			if (active === filteredOptions.length - 1) {
				return;
			}
			setActive((prev) => prev + 1);

			if (listRef.current) {
				listRef.current.scrollBy(0, Constants.ITEM_HEIGHT);
			}
		}
	};

	/**
	 * Function which handles close button click
	 */
	const handleOnClose = () => {
		if (onClearInput) {
			onClearInput();
		}
		if (ref?.current) {
			ref.current.focus();
		}
		setIsOpen(true);
		setSearchValue('');
		setSearchQuery('');
	};

	/**
	 * Function which handles change in input field
	 * @param {React.ChangeEvent<HTMLInputElement>} e - gets the value of input field
	 */
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsOpen(true);
		setSearchQuery(e.target.value);
		setSearchValue(e.target.value);
	};

	/**
	 * Function which handle click on dropdown option list item.
	 * @param {React.MouseEvent<HTMLLIElement>} event - item click event
	 * @param {ListItemType} option - the option on which click happens
	 */
	const handleItemClick = (
		event: React.MouseEvent<HTMLLIElement>,
		option: ListItemType
	) => {
		setActive(0);
		if (onSelect) {
			onSelect(event, option);
		}
		setIsOpen(true);
		if (ref.current) {
			ref.current.focus();
		}
	};

	/**
	 * Function which sets reference variable to the component.
	 */
	const handleSetRef = (node: HTMLInputElement | null) => {
		ref.current = node;
		if (inputRef) {
			inputRef.current = node;
		}
	};

	return (
		<AutoCompleteWrapper
			fullWidth={fullWidth}
			className={`mm-autocomplete ${className}`}
		>
			<Input
				disabled={disabled}
				ref={handleSetRef}
				fullWidth={fullWidth}
				searchQuery={searchQuery}
				onKeyDown={(e) => {
					onKeyDown(e);
					if (onKeyPress) {
						onKeyPress(e);
					}
				}}
				value={searchValue}
				label={label}
				iconName={leadingIcon}
				onClose={handleOnClose}
				onChange={(e) =>
					handleOnChange(e as unknown as ChangeEvent<HTMLInputElement>)
				}
				onInputFocus={() => setIsOpen(true)}
				{...restProps}
			/>
			{Boolean(filteredOptions.length) && (
				<List
					ref={listRef}
					isOpen={isOpen}
					listItems={filteredOptions}
					handleItemClick={handleItemClick}
					value={searchQuery}
					loading={optionsLoading}
					isAutocomplete={true}
					activeItem={active}
					secondaryLabelPosition={secondaryLabelPosition}
				/>
			)}
		</AutoCompleteWrapper>
	);
};
