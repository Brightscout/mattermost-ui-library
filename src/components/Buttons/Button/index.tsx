import React from 'react';

type ButtonProps = {
    text: string
    iconName?: string
    extraClass?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    isSecondaryButton?: boolean
    isDisabled?: boolean
}

const Button = ({
    text,
    iconName,
    extraClass = '',
    onClick,
    isSecondaryButton,
    isDisabled = false,
}: ButtonProps) => (
    <button
        disabled={isDisabled}
        onClick={onClick}
        className={`plugin-btn btn ${isSecondaryButton ? 'btn-link' : 'btn-primary'} ${extraClass}`}
    >
        {
            iconName && (
                <i
                    className={`${iconName} margin-left-8`}
                    aria-hidden='true'
                />
            )
        }
        {text}
    </button>
);

export default Button;
