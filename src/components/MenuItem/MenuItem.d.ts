import React from 'react';

import {IconType} from '@Components/Icon';

/**
 * Types of position for the secondary label
 *
 * `inline` - inline with the main label
 *
 * `block` - below the main label
 */
export type SecondaryLabelPositionType = 'inline' | 'block' | null;

export interface MenuItemProps {

    /**
	 * Main label in the menu item
	 */
    label: string;

    /**
	 * Secondary label to describe the main label in detail
	 */
    secondaryLabel?: string;

    /**
	 * Position of the secondary label
	 */
    secondaryLabelPosition?: SecondaryLabelPositionType;

    /**
	 * Leading icon in the menu item
	 */
    leadingIcon?: Exclude<IconType, 'Spinner'>;

    /**
	 * Trailing icon in the menu item
	 */
    trailingIcon?: Exclude<IconType, 'Spinner'>;

    /**
	 * Callback to be triggered on clicking the Menu Item
	 */
    onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;

    /**
	 * To override or extend the styles applied to the component
	 */
    className?: string;

    /**
     * Element to show before the label
     */
    showBeforeLabelElement?: JSX.Element;
}
