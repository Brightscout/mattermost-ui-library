import React from 'react';

type TextFieldProps = {
    label?: string | JSX.Element;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean | string;
    disabled?: boolean;
    className?: string;
}

const TextField = ({
    label,
    placeholder = '',
    value = '',
    onChange,
    error,
    disabled = false,
    className = '',
}: TextFieldProps) => (
    <div className={`textfield ${className}`}>
        {label && <label className='form-group__label wt-400'>{label}</label>}
        <textarea
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange?.(e)}
            placeholder={placeholder}
            disabled={disabled}
            className={`textfield__control border-radius-4 ${error && 'textfield__control--err error-text'}`}
        />
        {(error && typeof error === 'string') && <p className='form-group__err-text error-text font-14 margin-top-5'>{error}</p>}
    </div>
);

export default TextField;
