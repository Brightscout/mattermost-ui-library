import React from 'react';

type BaseCardProps = {
    children: JSX.Element,
    className?: string;
}

const BaseCard = ({children, className = ''}: BaseCardProps) => (
    <div className={`wrapper padding-15 margin-bottom-15 channel-bg border-radius-8 ${className}`}>{children}</div>
);

export default BaseCard;
