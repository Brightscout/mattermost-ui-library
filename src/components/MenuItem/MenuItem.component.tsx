import React from 'react';

import {Icon} from '@Components/Icon';

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
 * @example usage with secondary label positioned below the main label
 * ```ts
 * <MenuItem label='Main Label'
 *           secondaryLabel='Secondary Label'
 * />
 * ```
 *
 * @example usage with secondary label positioned inline with the main label
 * ```ts
 * <MenuItem label='Main Label'
 *           secondaryLabel='Secondary Label'
 *           secondaryLabelPosition='inline'
 * />
 * ```
 *
 * @example usage with trailing and leading icon
 * ```ts
 * <MenuItem label='Main Label'
 *           secondaryLabel='Secondary Label'
 *           leadingIcon='Edit'
 *           trailingIcon='Delete'
 * />
 * ```
 */
export const MenuItem = (props: MenuItemProps) => {
    const {
        label,
        secondaryLabel,
        leadingIcon,
        trailingIcon,
        secondaryLabelPosition = 'block',
        className = '',
        ...restProps
    } = props;

    return (
        <MenuItemWrapper
            tabIndex={0}
            className={`mm-menuItem ${className}`}
            {...restProps}
        >
            {
                leadingIcon &&
                    <Icon
                        name={leadingIcon}
                        size={16}
                    />
            }
            <Label
                className='mm-menuItem__label'
                secondaryLabelPosition={secondaryLabelPosition}
            >
                {label}
            </Label>
            {
                secondaryLabel &&
                    <SecondaryLabel
                        className='mm-menuItem__secondary-label'
                        secondaryLabelPosition={secondaryLabelPosition}
                    >
                        {secondaryLabel}
                    </SecondaryLabel>
            }
            {
                trailingIcon &&
                    <Icon
                        name={trailingIcon}
                        size={16}
                    />
            }
        </MenuItemWrapper>
    );
};
