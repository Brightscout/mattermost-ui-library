import React, {MutableRefObject, useEffect, useMemo, useRef, useState} from 'react';

import {Input} from '@Components/Input';
import {List} from '@Components/List';
import {AutoCompleteWrapper} from '@Components/AutoComplete/AutoComplete.styles';

import {Constants} from '@Constants';

import {ListItemType} from '@Components/List/List';

import {MMSearchProps} from './MMSearch';

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
        ...restProps
    } = props;

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(openOptions);
    const [active, setActive] = useState<number>(0);

    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(
        null,
    ) as MutableRefObject<HTMLUListElement>;

    /**
     * On clicking anywhere other than `input field`, the dropdown closes
     */
    const onDropDownCloseHandler = (e: MouseEvent) => {
        e.stopPropagation();
        if (e.target instanceof HTMLElement && !inputRef.current?.contains(e.target) && e.target !== inputRef.current) {
            setIsOpen(false);
        }
    };

    // Filter dropdown options based on the input value
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
        if (isOpen) {
            setActive(0);
            listRef.current.scrollTo(0, 0);
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

            listRef.current.scrollBy(0, -Constants.ITEM_HEIGHT);

            if (inputRef.current) {
                inputRef.current.focus();
            }
            return;
        }
        if (event.key === Constants.KeyboardEvent.ARROW_DOWN) {
            event.preventDefault();
            if (active === filteredOptions.length - 1) {
                return;
            }
            setActive((prev) => prev + 1);

            listRef.current.scrollBy(0, Constants.ITEM_HEIGHT);
        }
    };

    const handleOnClose = () => {
        if (onClearInput) {
            onClearInput();
        }
        if (inputRef?.current) {
            inputRef.current.focus();
        }
        setIsOpen(true);
        setSearchValue('');
        setSearchQuery('');
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsOpen(true);
        setSearchQuery(e.target.value);
        setSearchValue(e.target.value);
    };

    const handleItemClick = (event: React.MouseEvent<HTMLLIElement>, option: ListItemType) => {
        setActive(0);
        if (onSelect) {
            onSelect(event, option);
        }
        setIsOpen(true);
        if (inputRef.current) {
            inputRef.current.focus();
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
                onClose={handleOnClose}
                onChange={handleOnChange}
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
