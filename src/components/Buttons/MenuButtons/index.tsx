import React from 'react';

type MenuButtonProps = {
    buttons: {
        text: string,
        icon: string | JSX.Element;
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    }[];
    className?: string;
}

const MenuButtons = ({buttons, className = ''}: MenuButtonProps): JSX.Element => (
    <div className={`button-menu d-flex flex-column ${className}`}>
        {buttons.map((button) => (
            <button
                key={button.text}
                className='button-menu__btn channel-bg channel-text font-14 padding-v-12 padding-h-10 d-flex plugin-btn'
                onClick={button.onClick}
            >
                <span className='button-menu__btn-icon margin-right-10 d-inline-block'>
                    {typeof button.icon === 'string' ? <i className={button.icon} /> : button.icon}
                </span>
                <span className='button-menu__btn-text'>{button.text}</span>
            </button>
        ))}
    </div>
);

export default MenuButtons;
