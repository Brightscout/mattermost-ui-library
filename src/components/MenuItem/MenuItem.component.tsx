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
 *            leadingElement: <Icon name='Edit' size={16}/>,
 *              trailingElement: <Icon name='Delete' size={16}/>,
 * />
 * ```
 *
 * @example destructive usage with trailing and leading icon
 * ```ts
 * <MenuItem label='Main Label'
 *          destructive={true}
 *           secondaryLabel='Secondary Label'
 *            leadingElement: <Icon name='Edit' size={16}/>,
 *              trailingElement: <Icon name='Delete' size={16}/>,
 * />
 * ```
 */
export const MenuItem = (props: MenuItemProps) => {
    const {
        label,
        secondaryLabel,
        leadingElement,
        trailingElement,
        secondaryLabelPosition = 'block',
        className = '',
        disabled = false,
        destructive = false,
        ...restProps
    } = props;

    return (
        <MenuItemWrapper
            tabIndex={0}
            className={`mm-menuItem ${className}ss`}
            disabled={disabled}
            destructive={destructive}
            {...restProps}
        >
            {leadingElement}
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
            {trailingElement}
        </MenuItemWrapper>
    );
};
