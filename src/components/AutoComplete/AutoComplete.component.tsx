import React, {MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import _, {debounce} from 'lodash';

import {Input} from '@Components/Input';
import {List} from '@Components/List';
import {ListItemType} from '@Components/List/List';
import {Constants} from '@Constants';

import {AutoCompleteProps} from './AutoComplete';
import {AutoCompleteWrapper} from './AutoComplete.styles';

/**
 * An asynchronous function to search a query in the given list
 *
 * @param options - the search item list
 * @param query - query to search in the list
 * @returns list of items that include query with the given query
 */
const getOptionsAsync = (
	options: ListItemType[],
	query: string
): Promise<ListItemType[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				options.filter((option) => {
					const search = option.label ?? option.value;
					return search.toLowerCase().includes(query.toLowerCase());
				})
			);
		}, Constants.SUGGESTION_FETCH_DELAY);
	});
};

/**
 * AutoComplete Component
 *
 * @example Correct usage
 * ```ts
 * <AutoComplete
 * 	label='label'
 *  item=items: [
 * 		{label: 'label 1', value: 'Value 1'},
 * 		{label: 'label 2', value: 'Value 2'},
 * 		{label: 'label 3', value: 'Value 3'},
 * 	]
 * />
 * ```
 *
 * @example Correct usage for accessing the selected value
 * ```ts
 * <AutoComplete
 * 	label='label'
 *  item=items: [
 * 		{label: 'label 1', value: 'Value 1', icon: 'User'},
 * 		{label: 'label 2', value: 'Value 2', icon: 'User'},
 * 		{label: 'label 3', value: 'Value 3', icon: 'User'},
 * 	]
 * 	onSelect={(event, options)=> {
 * 		logic to use selected value;
 * 	}}
 * />
 * ```
 *
 * @example Correct usage for options with icon
 * ```ts
 * <AutoComplete
 * 	label='label'
 *  item=items: [
 * 		{label: 'label 1', value: 'Value 1', icon: 'User'},
 * 		{label: 'label 2', value: 'Value 2', icon: 'User'},
 * 		{label: 'label 3', value: 'Value 3', icon: 'User'},
 * 	]
 * />
 * ```
 */
export const AutoComplete = (props: AutoCompleteProps) => {
	const {
		fullWidth,
		items,
		onSelect,
		label,
		className = '',
		leadingIcon,
		...restProps
	} = props;

	const [searchValue, setSearchValue] = useState<string>('');
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [options, setOptions] = useState<ListItemType[]>([]);
	const [open, setOpen] = useState<boolean>(false);
	const [active, setActive] = useState<number>(0);

	const ref = useRef<HTMLInputElement>(null);
	const listRef = useRef<HTMLUListElement>(null) as MutableRefObject<HTMLUListElement>;

	/**
	 * On clicking anywhere other than `input field`, the dropdown closes
	 */
	const onDropDownCloseHandler = (e: MouseEvent) => {
		if (e.target !== ref.current) setOpen(false);
	};

	useEffect(() => {
		document.body.addEventListener('click', onDropDownCloseHandler);

		return () => {
			document.body.removeEventListener('click', onDropDownCloseHandler);
		};
	}, []);

	/**
	 * If isOpen is true and value is empty, then set the active index to 0 and scroll the list to (0,0)
	 * else, set the active index to selected item index
	 */
	useEffect(() => {
		if(open) {
			setActive(0);
			listRef.current.scrollTo(0, 0);
		}
	}, [open]);

	/**
	 * A callback function called after searchQuery value is changed
	 *
	 * The function first deletes the previous option list and closes the popover list. Then,
	 * calls the `getOptionAsync` function to get the new list according to the searchQuery
	 * after the delay of 200ms.
	 */
	const getOptionsDelayed = useCallback(
		debounce((query: string, callback: (options: ListItemType[]) => void) => {
			setOptions([]);
			setOpen(false);
			getOptionsAsync(items, query).then(callback);
		}, Constants.FETCH_FUNCTION_DELAY),
		[]
	);

	// On every change in searchQuery's value, it sets loading to true and
	// fetch the new list according to the value of searchQuery
	useEffect(() => {
		setIsLoading(true);

		getOptionsDelayed(searchQuery, (options: ListItemType[]) => {
			setOptions(options);
			setOpen(Boolean(options.length && searchQuery));
			setIsLoading(false);
		});
	}, [searchQuery, getOptionsDelayed]);

	/**
	 * The function is called when an event is detected on the keyboard,
	 * so you can browse through the list and select one.
	 */
	const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (event.key === 'Enter') {
			const option = options[active];
			setSearchValue(option.label ?? option.value);
			setActive(0);
			setOptions([]);
			setOpen(false);
    }
		else if (event.key === 'ArrowUp') {
      if (active === 0) return;
			setActive(prev => prev - 1);
			listRef.current.scrollBy(0, -Constants.ITEM_HEIGHT);
    }
		else if (event.key === 'ArrowDown') {
      if (active === options.length - 1) return;
      setActive(prev => prev + 1);
			listRef.current.scrollBy(0, Constants.ITEM_HEIGHT);
    }
  };

	return (
		<AutoCompleteWrapper
			fullWidth={fullWidth}
			className={`mm-autocomplete ${className}`}
		>
			<Input
				ref={ref}
				fullWidth={fullWidth}
				searchQuery={searchQuery}
				onKeyDown={onKeyDown}
				value={searchValue}
				label={label}
				iconName={leadingIcon}
				onClose={() => {
					setOpen(false);
					setSearchQuery('');
					setSearchValue('');
				}}
				onChange={(e) => {
					setSearchQuery(e.target.value);
					setSearchValue(e.target.value);
				}}
				{...restProps}
			/>
			{!!options.length && (
				<List
					ref={listRef}
					isOpen={open}
					listItems={options}
					handleItemClick={(event, option) => {
						setActive(0);
						setSearchValue(option.label ?? option.value);
						if (onSelect) onSelect(event, option);
					}}
					value={searchQuery}
					loading={isLoading}
					isAutocomplete={true}
					activeItem={active}
				/>
			)}
		</AutoCompleteWrapper>
	);
};
