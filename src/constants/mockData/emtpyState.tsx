import React from 'react';

// Mock data for "EmptyState" component
export const buttonActionHandler = jest.fn();
export const emptyStateProps = {
    title: 'Empty state title',
    subTitle: 'Empty state subtitle',
    buttonConfig: {
        text: 'Button Text',
        link: 'button link',
        download: true,
        action: buttonActionHandler,
    },
    icon: <i className='fa fa-link' />,
    className: 'empty-state-class',
};
