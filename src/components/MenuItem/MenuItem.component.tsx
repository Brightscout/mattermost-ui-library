import React from 'react';

import {MenuItemProps} from './MenuItem';
import {Label, MenuItemWrapper, SecondaryLabel} from './MenuItem.styles';

/**
 * MenuItem Component
 *
 * @example Correct usage
 *
 * ```ts
 * <MenuItem label='Menu Item Label' />
 * ```
 *
 * @example usage with secondary label positioned below main label
 * ```ts
 * <MenuItem label='Main Label'
 *           secondaryLabel='Secondary Label'
 * />
 * ```
 *
 * @example usage with secondary label positioned inline with main label
 * ```ts
 * <MenuItem label='Main Label'
 *           secondaryLabel='Secondary Label'
 *           secondaryLabelPosition='inline'
 * />
 * ```
 *
 * @example usage with trailing and leading element
 * ```ts
 * <MenuItem label='Main Label'
 *           secondaryLabel='Secondary Label'
 *           leadingElement={<Icon name='Edit' size={12}/>}
 *           trailingElement={<Icon name='Delete' size={12}>}
 */
export const MenuItem = (props: MenuItemProps) => {
    const {
        label,
        secondaryLabel,
        leadingElement,
        trailingElement,
        onClick,
        secondaryLabelPosition = 'block',
        className = '',
    } = props;
    return (
        <MenuItemWrapper
            tabIndex={0}
            onClick={onClick}
            className={`mm-menuItem ${className}`}
        >
            {leadingElement}
            <Label
                className='mm-menuItem__label'
                secondaryLabelPosition={secondaryLabelPosition}
            >
                {label}
            </Label>
            <SecondaryLabel
                className='mm-menuItem__secondary-label'
                secondaryLabelPosition={secondaryLabelPosition}
            >
                {secondaryLabel}
            </SecondaryLabel>
            {trailingElement}
        </MenuItemWrapper>
    );
};
