import React from 'react';

type EmptyStatePropTypes = {
    title: string;
    subTitle?: string;
    buttonConfig?:{
        text: string,
        link?: string,
        download?: boolean,
        action?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    } | null;
    iconClass?: string;
    icon?: JSX.Element;
    className?: string;
}

const EmptyState = ({
    title,
    subTitle,
    buttonConfig,
    iconClass,
    icon,
    className,
}: EmptyStatePropTypes) => (
    <div className={`empty-state text-center d-flex align-items-center justify-content-center ${className}`}>
        <div className='d-flex flex-column align-items-center'>
            <div className='empty-state__icon margin-bottom-25 d-flex justify-content-center align-items-center'>
                {icon ?? <i className={iconClass ?? 'fa fa-wifi'}/>}
            </div>
            <p className='empty-state__title wt-500 font-size-20'>{title}</p>
            {subTitle && <p className='empty-state__subtitle margin-top-15'>{subTitle}</p>}
            {buttonConfig?.action && (
                <button
                    onClick={buttonConfig.action}
                    className='empty-state__btn btn btn-primary margin-top-25'
                >
                    {buttonConfig.text}
                </button>
            )}
            {buttonConfig?.link && (
                <a
                    target='_blank'
                    rel='noreferrer'
                    href={buttonConfig.link}
                    download={buttonConfig.download}
                    className='empty-state__btn btn btn-primary margin-top-25'
                >
                    {buttonConfig.text}
                </a>
            )}
        </div>
    </div>
);

export default EmptyState;
