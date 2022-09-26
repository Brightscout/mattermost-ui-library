import React from 'react';

// Mock data for "ButtonMenu" component tests
export const Icon = <i className='icon icon-globe' />;
export const onBtnClick = jest.fn();
export const buttons = [{
    text: 'Button Text',
    icon: Icon,
    onClick: onBtnClick,
}, {
    text: 'Button Text 2',
    icon: Icon,
    onClick: onBtnClick,
}];
