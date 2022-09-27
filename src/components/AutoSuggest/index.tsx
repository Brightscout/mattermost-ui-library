import React, {useCallback, useEffect, useState, useRef} from 'react';

// Constants
import {DefaultCharThresholdToShowSuggestions} from '@Constants';

export type AutoSuggestProps = {
    inputValue: string;
    onInputValueChange: (newValue: string) => void;
    onChangeSelectedSuggestion: (suggestion: Record<string, string> | null) => void;
    placeholder?: string;
    suggestionConfig: {
        suggestions: Record<string, string>[];
        renderValue: (suggestion: Record<string, string>) => string | JSX.Element;
    };
    loadingSuggestions?: boolean;
    charThresholdToShowSuggestions?: number;
    disabled?: boolean;
    error?: boolean | string;
    required?: boolean;
    className?: string;
}

const AutoSuggest = ({
    inputValue,
    onInputValueChange,
    placeholder,
    suggestionConfig,
    loadingSuggestions = false,
    charThresholdToShowSuggestions = DefaultCharThresholdToShowSuggestions,
    disabled = false,
    error,
    required,
    className = '',
    onChangeSelectedSuggestion,
}: AutoSuggestProps) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [focused, setFocused] = useState(false);
    const textInputFieldRef = useRef<HTMLInputElement>(null);
    const autoSuggestRef = useRef<HTMLDivElement>(null);
    const [selectedOption, setSelectedOption] = useState<Record<string, string> | null>(null);

    const {suggestions, renderValue} = suggestionConfig;

    // Show suggestions depending on the input value, number of characters and whether the input is in focused state
    useEffect(() => {
        setShowSuggestions(inputValue.length >= charThresholdToShowSuggestions && focused);
    }, [charThresholdToShowSuggestions, focused, inputValue]);

    // When the auto-suggest's input value is reset for any reason, the selected suggestion should be reset
    useEffect(() => {
        if (!inputValue) {
            setSelectedOption(null);
        }
    }, [inputValue]);

    useEffect(() => {
        if (focused) {
            textInputFieldRef.current?.focus();
        } else {
            textInputFieldRef.current?.blur();
        }
    }, [focused]);

    // Close the auto-suggest popover when the user clicks outside
    useEffect(() => {
        const handleCloseAutoSuggest = (e: MouseEvent) => !autoSuggestRef.current?.contains(e.target as Element) && setFocused(false);

        document.addEventListener('click', handleCloseAutoSuggest);

        return () => document.removeEventListener('click', handleCloseAutoSuggest);
    }, []);

    const handleSuggestionClick = useCallback((suggestedValue: Record<string, string>) => {
        onChangeSelectedSuggestion(suggestedValue);
        setFocused(false);

        // Render the selected option
        setSelectedOption(suggestedValue);
    }, [onChangeSelectedSuggestion]);

    // Prevent the text input field(which is the field visible in the UI) from blurring if "focused" is set to "true"
    const handleBlur = useCallback(() => focused && textInputFieldRef.current?.focus(), [focused]);

    // Handles resetting the selected suggestion
    const handleResetSelectedOption = useCallback(() => {
        setSelectedOption(null);
        onChangeSelectedSuggestion(null);
        onInputValueChange('');
    }, [onChangeSelectedSuggestion, onInputValueChange]);

    return (
        <div
            className={
                `auto-suggest position-relative margin-bottom-25
                ${disabled && 'auto-suggest--disabled cursor-not-allowed'}
                ${error && 'auto-suggest--error'}
                ${className}
                `
            }
            ref={autoSuggestRef}
        >
            <div
                className={
                    `auto-suggest__field padding-h-20 cursor-pointer d-flex align-items-center justify-content-between
                    ${focused && 'auto-suggest__field--focused'}
                    ${disabled && 'cursor-not-allowed'}
                    `
                }
            >
                <input
                    type='checkbox'
                    className='auto-suggest__toggle-input cursor-text'
                    checked={focused}
                    disabled={disabled}
                    onClick={() => setFocused(true)}
                    readOnly={true}
                />
                <input
                    ref={textInputFieldRef}
                    placeholder={`${placeholder ?? ''}${required ? '*' : ''}`}
                    value={inputValue}
                    onChange={(e) => onInputValueChange(e.target.value)}
                    onBlur={handleBlur}
                    className={`auto-suggest__input padding-0 ${disabled && 'cursor-not-allowed'}`}
                    disabled={disabled}
                />
                {loadingSuggestions ? (
                    <div className='auto-suggest__loader'/>
                ) : (
                    <i
                        className={
                            `fa fa-angle-down auto-suggest__field-angle font-20
                            ${showSuggestions && 'auto-suggest__field-angle--rotated'}
                            `
                        }
                    />
                )}
            </div>
            {inputValue.length < charThresholdToShowSuggestions && focused && (
                <p className='auto-suggest__get-suggestion-warn font-12'>
                    {`Please enter at least ${charThresholdToShowSuggestions} characters to get suggestions.`}
                </p>
            )}
            <ul className={`auto-suggest__suggestions padding-0 ${showSuggestions && 'auto-suggest__suggestions--open'}`}>
                {suggestions.map((suggestion, index) => (
                    <li
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className='auto-suggest__suggestion text-ellipsis cursor-pointer padding-v-10 padding-h-25 margin-0'
                    >
                        {renderValue(suggestion)}
                    </li>
                ))}
                {!suggestions.length && <li className='auto-suggest__suggestion padding-v-10 padding-h-25 margin-0'>{'Nothing to show'}</li>}
            </ul>
            {selectedOption && (
                <div className='d-flex align-items-center justify-content-between auto-suggest__selected-option-container padding-h-20 channel-bg'>
                    <div className='auto-suggest__selected-option-value text-ellipsis'>{renderValue(selectedOption)}</div>
                    <button
                        className='style--none padding-0 margin-0'
                        onClick={handleResetSelectedOption}
                        name='cancel selected option'
                    >
                        <i className='icon icon-close'/>
                    </button>
                </div>
            )}
            {typeof error === 'string' && (
                <p
                    className={`
                        auto-suggest__err-text
                        error-text
                        ${inputValue.length < charThresholdToShowSuggestions && focused ? 'margin-top-15' : 'margin-top-5'}
                        font-14
                    `}
                >
                    {error}
                </p>
            )}
        </div>
    );
};

export default AutoSuggest;
