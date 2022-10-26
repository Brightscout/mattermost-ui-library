import React from 'react';

type TextAreaProps = {
    label?: React.ReactNode;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean | string;
    disabled?: boolean;
    className?: string;
}

const TextArea = ({
    label,
    placeholder = '',
    value = '',
    onChange,
    error,
    disabled = false,
    className = '',
}: TextAreaProps) => (
    <div className={`textarea ${className}`}>
        {label && <label className='form-group__label wt-400'>{label}</label>}
        <textarea
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange?.(e)}
            placeholder={placeholder}
            disabled={disabled}
            className={`textarea__control border-radius-4 ${error && 'textarea__control--err error-text'}`}
        />
        {(error && typeof error === 'string') && <p className='form-group__err-text error-text font-14 margin-top-5'>{error}</p>}
    </div>
);

export default TextArea;
