import React, {useEffect, useState, useRef, useCallback} from 'react';

export type DropdownProps = {
    value: string | null;
    placeholder: string;
    onChange: (newValue: string) => void;
    options: DropdownOptionType[];
    customOption?: DropdownOptionType & {
        onClick: (customOptionValue: string) => void;
    };
    loadingOptions?: boolean;
    disabled?: boolean;
    required?: boolean;
    error?: boolean | string;
    className?: string;
}

const Dropdown = ({
    value,
    placeholder,
    options,
    onChange,
    customOption,
    loadingOptions,
    disabled,
    error,
    required,
    className = '',
}: DropdownProps): JSX.Element => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handles closing the popover and updating the value when someone selects an option
    const handleInputChange = useCallback((newOption: DropdownOptionType) => {
        setOpen(false);

        // Trigger onChange only if there is a change in the dropdown value
        if (newOption.value !== value) {
            onChange(newOption.value);
        }
    }, [setOpen, onChange, value]);

    // Handles when someone clicks on the custom option
    const handleCustomOptionClick = useCallback(() => {
        // Update the value on the input to indicate custom option has been chosen
        handleInputChange({
            label: customOption?.label,
            value: customOption?.value as string,
        });

        // Take the action that needs to be taken(only if not already taken) to handle when the user chooses the custom option
        if (customOption?.onClick && customOption.value !== value) {
            customOption.onClick(customOption.value);
        }
    }, [customOption, handleInputChange, value]);

    const getOptions = useCallback(() => (customOption ? [...options, {label: customOption.label, value: customOption.value}] : options), [customOption, options]);

    const getLabel = useCallback((optionValue: string | null) => getOptions().find((option) => option.value === optionValue), [getOptions]);

    // Close the dropdown popover when the user clicks outside
    useEffect(() => {
        const handleCloseDropdown = (e: MouseEvent) => !dropdownRef.current?.contains(e.target as Element) && setOpen(false);

        document.addEventListener('click', handleCloseDropdown);

        return () => document.removeEventListener('click', handleCloseDropdown);
    }, []);

    return (
        <div
            className={`dropdown ${error && 'dropdown--error'} position-relative ${className}`}
            ref={dropdownRef}
        >
            <div
                className={
                    `dropdown__field d-flex align-items-center justify-content-between
                    padding-h-15 border-radius-4 cursor-pointer
                    ${open && 'dropdown__field--open'}
                    ${disabled && 'dropdown__field--disabled cursor-not-allowed'}
                    `
                }
            >
                {placeholder && <label className={`dropdown__field-text dropdown__field-placeholder margin-0 wt-400 ${value && 'dropdown__field-placeholder--shifted'}`}>
                    {placeholder}
                    {required && '*'}
                </label>}
                {value && <p className='dropdown__field-text font-size-14 wt-500 margin-0 margin-top-15 text-ellipsis'>
                    {getLabel(value)?.label || getLabel(value)?.value}
                </p>}
                {loadingOptions ? (
                    <div className='dropdown__loader'/>
                ) : (
                    <i className={`fa fa-angle-down dropdown__field-angle font-size-20 ${open && 'dropdown__field-angle--rotated'}`}/>
                )}
                <input
                    type='checkbox'
                    className='dropdown__field-input cursor-pointer'
                    checked={open}
                    onChange={(e) => setOpen(e.target.checked)}
                    disabled={disabled}
                />
            </div>
            <ul className={`dropdown__options-list channel-bg padding-0 border-radius-4 ${open && 'dropdown__options-list--open'}`}>
                {options.map((option) => (
                    <li
                        key={option.value}
                        onClick={() => !disabled && handleInputChange(option)}
                        className='dropdown__option-item text-ellipsis font-size-14 margin-0 padding-v-10 padding-h-25 cursor-pointer'
                    >
                        {option.label || option.value}
                    </li>
                ))}
                {!options.length && <li className='dropdown__option-item text-ellipsis'>{'Nothing to show'}</li>}
                {customOption && (
                    <li
                        onClick={() => !disabled && handleCustomOptionClick()}
                        className='dropdown__option-item dropdown__custom-option text-ellipsis'
                    >
                        {customOption.label || customOption.value}
                    </li>
                )}
            </ul>
            {typeof error === 'string' && <p className='dropdown__err-text font-size-14 margin-top-5 error-text'>{error}</p>}
        </div>
    );
};

export default Dropdown;
