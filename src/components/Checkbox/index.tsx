import React from 'react';

type CheckboxProps = {
    checked: boolean;
    label?: string | JSX.Element;
    onChange: (checked: boolean) => void;
    className?: string;
}

const Checkbox = ({
    checked,
    label,
    onChange,
    className = '',
}: CheckboxProps): JSX.Element => (
    <div className={`checkbox position-relative d-flex align-items-center ${className}`}>
        <input
            type='checkbox'
            checked={checked}
            className='checkbox__input-field margin-0 cursor-pointer'
            onChange={(e) => onChange(e.target.checked)}
        />
        <div className='checkbox__box d-flex justify-content-between align-items-center'>
            <i className='fa fa-check checkbox__tick' />
        </div>
        {label && <label className='checkbox__label font-14 wt-500 padding-0 margin-left-12 cursor-pointer'>{label}</label>}
    </div>
);

export default Checkbox;
