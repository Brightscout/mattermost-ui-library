import React from 'react';
import {FormControl} from 'react-bootstrap';

type InputFieldProps = {
    type?: 'text' | 'password' | 'email';
    label?: string | JSX.Element;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean | string;
    disabled?: boolean;
    className?: string;
}

const Input = ({
    type = 'text',
    label,
    placeholder = '',
    value = '',
    onChange,
    error,
    disabled = false,
    className = '',
}: InputFieldProps) => (
    <div className={`form-group ${className}`}>
        {label && <label className='form-group__label wt-400'>{label}</label>}
        <FormControl
            type={type}
            value={value}
            onChange={(e) => onChange?.(e as React.ChangeEvent<HTMLInputElement>)}
            placeholder={placeholder}
            disabled={disabled}
            className={`form-group__control border-radius-4 ${error && 'form-group__control--err error-text'}`}
        />
        {(error && typeof error === 'string') && <p className='form-group__err-text error-text font-size-14 margin-top-5'>{error}</p>}
    </div>
);

export default Input;
