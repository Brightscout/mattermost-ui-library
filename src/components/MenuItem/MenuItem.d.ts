import React from 'react';

import {IconType} from '@Components/Icon';

/**
 * Type of position for secondary label
 *
 * `inline` - inline with the main label
 *
 * `block` - below the main label
 */
export type SecondaryLabelPositionType = 'inline' | 'block';

export interface MenuItemProps {

    /**
	 * Main label in the menu item
	 */
    label: string;

    /**
	 * Secondary label to describe main label in detail
	 */
    secondaryLabel?: string;

    /**
	 * Position of secondary label
	 */
    secondaryLabelPosition?: SecondaryLabelPositionType;

    /**
	 * Leading icon in menu item
	 */
    leadingIcon?: Exclude<IconType, 'Spinner'>;

    /**
	 * Trailing icon in menu item
	 */
    trailingIcon?: Exclude<IconType, 'Spinner'>;

    /**
	 * Callback to be triggered on clicking the Menu Item
	 */
    onClick?: (event?: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;

    /**
	 * To override or extend the styles applied to the component
	 */
    className?: string;
}
