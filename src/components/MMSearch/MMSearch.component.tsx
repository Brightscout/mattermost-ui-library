import React, { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';

import { Input } from '@Components/Input';
import { List } from '@Components/List';
import { AutoCompleteWrapper } from '@Components/AutoComplete/AutoComplete.styles';

import { Constants } from '@Constants';

import { MMSearchProps } from './MMSearch';

/**
 * MMSearch Component
 *
 * @example Correct usage
 * ```ts
 * <MMSearch
 *  searchValue=""
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
 *  searchValue=""
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
        ...restProps
    } = props;

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [open, setOpen] = useState<boolean>(openOptions);
    const [active, setActive] = useState<number>(0);

    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(
        null,
    ) as MutableRefObject<HTMLUListElement>;

    /**
     * On clicking anywhere other than `input field`, the dropdown closes
     */
    const onDropDownCloseHandler = (e: MouseEvent) => {
        if (e.target !== inputRef.current) {
            setOpen(false);
        }
    };

    // filter dropdown options based on the input value
    const filteredOptions = useMemo(
        () => (filterBy ? items.filter((item) => item.label?.startsWith(filterBy) && item.label !== filterBy) : items),
        [filterBy, items]);

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
        if (open) {
            setActive(0);
            if (typeof listRef.current?.scrollTo === 'function') {
                listRef.current.scrollTo(0, 0);
            }
        }
    }, [open]);

    /**
     * The function is called when an event is detected on the keyboard,
     * so you can browse through the list and select one.
     */
    const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (!filteredOptions.length || !open) {
            return;
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            const option = items[active];

            if (onSelect) {
                onSelect(event, option);
            }

            setActive(0);
            return;
        }
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (active === 0) {
                return;
            }
            setActive((prev) => prev - 1);
            if (typeof listRef.current?.scrollBy === 'function') {
                listRef.current.scrollBy(0, -Constants.ITEM_HEIGHT);
            }
            if (inputRef.current) {
                inputRef.current.focus();
            }
            return;
        }
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (active === items.length - 1) {
                return;
            }
            setActive((prev) => prev + 1);
            if (typeof listRef.current.scrollBy === 'function') {
                listRef.current.scrollBy(0, Constants.ITEM_HEIGHT);
            }
        }
    };

    return (
        <AutoCompleteWrapper
            fullWidth={fullWidth}
            className={`mm-autocomplete ${className}`}
        >
            <Input
                ref={inputRef}
                fullWidth={fullWidth}
                searchQuery={searchQuery}
                onKeyDown={onKeyDown}
                value={searchValue}
                label={label}
                iconName={leadingIcon}
                onClose={() => {
                    setSearchValue('');
                    setSearchQuery('');
                }}
                onChange={(e) => {
                    setOpen(true);
                    setSearchQuery(e.target.value);
                    setSearchValue(e.target.value);
                }}
                {...restProps}
            />
            {Boolean(filteredOptions.length) && (
                <List
                    ref={listRef}
                    isOpen={open}
                    listItems={filteredOptions}
                    handleItemClick={(event, option) => {
                        setActive(0);
                        if (onSelect) {
                            onSelect(event, option);
                        }
                        setOpen(true);
                        if (inputRef.current) {
                            inputRef.current.focus();
                        }
                    }}
                    value={searchQuery}
                    loading={optionsLoading}
                    isAutocomplete={true}
                    activeItem={active}
                />
            )}
        </AutoCompleteWrapper>
    );
};
