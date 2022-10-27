import React, {useEffect, useRef, useState} from 'react';

import {Icon} from '@Components/Icon';

import {MenuItem} from '@Components/MenuItem';
import Colors from '@Styles/colorsForJs.module.scss';

import {OptionTypeWithLabel, SelectProps} from './Select';
import {
    Input,
    Label,
    LeadingIcon,
    Options,
    SelectWrapper,
    TextField,
    TrailingIcon,
} from './Select.styles';

/**
 * Select Component
 *
 * @example Correct usage with array of string options
 *
 * ```ts
 * <Select
 *      label='label'
 *      options=['Option1', 'Option2', 'Option3']
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
 *
 * @example usage with leading icon
 *
 * ```ts
 * <Select
 *      label='label'
 *      options=['Option1', 'Option2', 'Option3']
 *      leadingIcon='User'
 *      onSelectOptionHandler={onUserSelectHandler}
 * />
 * ```
 * @returns
 */
export const Select = (props: SelectProps) => {
    const {leadingIcon, options, label, onSelectOptionHandler} = props;

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);
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
            inputRef.current?.blur();
            setIsOpen(false);
        } else {
            inputRef.current?.focus();
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
        option: string | OptionTypeWithLabel,
    ) => {
        if (typeof option === 'string') {
            setValue(option);
        } else {
            setValue(option.label);
        }
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
        <SelectWrapper>
            <TextField>
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
                            size={14}
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
                            size={14}
                        />
                    ) : (
                        <Icon
                            name='ArrowDown'
                            size={14}
                        />
                    )}
                </TrailingIcon>
            </TextField>
            <Options
                open={isOpen}
                className='select__option-list'
            >
                {options.map((option) => {
                    if (typeof option === 'string') {
                        return (
                            <MenuItem
                                key={option}
                                className={option === value ? 'active' : ''}
                                onClick={(e) => onUserSelectHandler(e, option)}
                                label={option}
                                trailingElement={
                                    option === value && (
                                        <Icon
                                            name='Check'
                                            iconColor={Colors.primary}
                                            size={14}
                                        />
                                    )
                                }
                            />
                        );
                    }
                    return (
                        <MenuItem
                            key={option.label}
                            className={option.label === value ? 'active' : ''}
                            onClick={(e) => onUserSelectHandler(e, option)}
                            label={option.label}
                            trailingElement={
                                option.label === value && (
                                    <Icon
                                        name='Check'
                                        iconColor={Colors.primary}
                                        size={14}
                                    />
                                )
                            }
                        />
                    );
                })}
            </Options>
        </SelectWrapper>
    );
};
