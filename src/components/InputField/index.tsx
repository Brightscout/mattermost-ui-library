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
    required?: boolean;
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
    required = false,
}: InputFieldProps) => (
    <div className={`form-group ${className}`}>
        {label && <label className='form-group__label wt-400'>{label}</label>}
        {value.length>0 && <label className={'wt-400 form-group__field-placeholder'}>
            {placeholder}
            {required && '*'}
        </label>}
        <FormControl
            type={type}
            value={value}
            onChange={(e) => onChange?.(e as React.ChangeEvent<HTMLInputElement>)}
            placeholder={`${placeholder}${required ? '*' : ''}`}
            disabled={disabled}
            className={`form-group__control border-radius-4 ${error && 'form-group__control--err error-text'} ${value?.length>0 && 'form-group__input--shifted'}`}
        />
        {(error && typeof error === 'string') && <p className='form-group__err-text error-text font-14 margin-top-5'>{error}</p>}
    </div>
);

export default Input;
