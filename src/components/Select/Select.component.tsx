import React, {MutableRefObject, useEffect, useRef, useState} from 'react';

import {Icon} from '@Components/Icon';
import {MenuItem} from '@Components/MenuItem';

import {OptionType, SelectProps} from './Select';
import {
    Input,
    Label,
    LeadingIcon,
    Options,
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
 *               {label: 'Label 3', value: 'Value 3', iconName: 'Globe' }
 *              ]
 *      leadingIcon='User'
 *      onSelectOptionHandler={onUserSelectHandler}
 * />
 * ```
 *
 */
export const Select = (props: SelectProps) => {
    const {leadingIcon, options, label, onSelectOptionHandler} = props;

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null) as MutableRefObject<HTMLInputElement>;
    const trailingIconRef = useRef<HTMLDivElement>(null);

    /**
	 * On clicking or on focusing the input field
	 * isOpen is set to `true` and the dropdown opens with passed in options
	 */
    const onFocusHandler = () => {
        setIsOpen(true);
    };

    /**
     * On clicking the trailing icon which are either a string array

     * if isOpen = `true`  a close icon is rendered, on clicking clears the input field and closes the dropdown
     * if isOpen = `false` an arrow down is rendered, on clicking opens the dropdown
     *
     */
    const onIconTrailingIconClickHandler = () => {
        setValue('');
        if (isOpen) {
            inputRef.current.blur();
            setIsOpen(false);
        } else {
            inputRef.current.focus();
            setIsOpen(true);
        }
    };

    /**
	 * On clicking anywhere other than `input field` or `trailing icon` the dropdown closes
	 */
    const onDropDownCloseHandler = (e: MouseEvent) => {
        if (e.target === inputRef.current) {
            return;
        }
        if (e.target === trailingIconRef.current) {
            return;
        }
        if (isOpen) {
            setIsOpen(false);
        }
    };

    /**
	 * On user selecting the option the value / label of the menu Item is set to the  input field
	 */
    const onUserSelectHandler = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        option: OptionType,
    ) => {
        setValue(option.label ?? option.value);
        onSelectOptionHandler(e, option);
    };

    // On clicking anywhere other than the input field the dropdown closes
    useEffect(() => {
        document.body.addEventListener('click', onDropDownCloseHandler);

        return () => {
            document.body.removeEventListener('click', onDropDownCloseHandler);
        };
    });

    return (
        <>
            <Wrapper>
                <Input
                    ref={inputRef}
                    placeholder=' '
                    type='text'
                    onFocus={onFocusHandler}
                    readOnly={true}
                    value={value}
                    leadingIcon={leadingIcon}
                />
                <Label leadingIcon={leadingIcon}>{label}</Label>
                {leadingIcon && (
                    <LeadingIcon className='select__leading-icon'>
                        <Icon
                            name={leadingIcon}
                            size={16}
                        />
                    </LeadingIcon>
                )}
                <TrailingIcon
                    className='select__trailing-icon'
                    ref={trailingIconRef}
                    onClick={onIconTrailingIconClickHandler}
                >
                    {isOpen || value ? (
                        <Icon
                            name='Close'
                            size={16}
                        />
                    ) : (
                        <Icon
                            name='ArrowDown'
                            size={16}
                        />
                    )}
                </TrailingIcon>
            </Wrapper>
            <Options
                open={isOpen}
                className='select__option-list'
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.value}
                        className={(option.label ?? option.value) === value ? 'active' : ''}
                        onClick={(e) => onUserSelectHandler(e, option)}
                        label={option.label ?? option.value}
                        leadingIcon={option.iconName}
                        {...((option.label ?? option.value) === value && {trailingIcon: 'Check'})}
                    />
                ))}
            </Options>
        </>
    );
};
