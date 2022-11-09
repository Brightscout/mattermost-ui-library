import React, {useCallback, useEffect, useRef, useState} from 'react';
import _, {debounce} from 'lodash';

import {Input} from '@Components/Input';
import {List} from '@Components/List';
import {ListItemType} from '@Components/List/List';

import {AutoCompleteProps} from './AutoComplete';
import {AutoCompleteWrapper} from './AutoComplete.styles';

/**
 * An asynchronous function to search the query in the given list
 *
 * @param options - the search item list
 * @param query - query to search in the list
 * @returns list of items that included query with the given query
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
		}, 500);
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
 * 		{label: 'koko 1', value: 'Value 1'},
 * 		{label: 'asd 2', value: 'Value 2'},
 * 		{label: 'xcs 3', value: 'Value 3'},
 * 	]
 * />
 * ```
 *
 * @example Correct usage for accessing the selected value
 * ```ts
 * <AutoComplete
 * 	label='label'
 *  item=items: [
 * 		{label: 'koko 1', value: 'Value 1', icon: 'User'},
 * 		{label: 'asd 2', value: 'Value 2', icon: 'User'},
 * 		{label: 'xcs 3', value: 'Value 3', icon: 'User'},
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
 * 		{label: 'koko 1', value: 'Value 1', icon: 'User'},
 * 		{label: 'asd 2', value: 'Value 2', icon: 'User'},
 * 		{label: 'xcs 3', value: 'Value 3', icon: 'User'},
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

	const ref = useRef<HTMLInputElement>(null);

	/**
	 * On clicking anywhere other than `input field`, the dropdown closes
	 */
	const onDropDownCloseHandler = (e: MouseEvent) => {
		if (e.target === ref.current) return;
		setOpen(false);
	};

	useEffect(() => {
		document.body.addEventListener('click', onDropDownCloseHandler);

		return () => {
			document.body.removeEventListener('click', onDropDownCloseHandler);
		};
	});

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
		}, 200),
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

	return (
		<AutoCompleteWrapper
			fullWidth={fullWidth}
			className={`mm-autocomplete ${className}`}
		>
			<Input
				ref={ref}
				fullWidth={fullWidth}
				searchQuery={searchQuery}
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
			{options.length && (
				<List
					isOpen={open}
					listItems={options}
					handleItemClick={(event, option) => {
						setSearchValue(option.label ?? option.value);
						if (onSelect) onSelect(event, option);
					}}
					value={searchQuery}
					loading={isLoading}
					isAutocomplete={true}
				/>
			)}
		</AutoCompleteWrapper>
	);
};
