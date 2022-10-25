import React from 'react';

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
	 * Leading element in menu item
	 */
    leadingElement?: React.ReactNode;

    /**
	 * Trailing element in menu item
	 */
    trailingElement?: React.ReactNode;

    /**
	 * Callback to be triggered on clicking the Menu Item
	 */
    onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;

    /**
	 * To override or extend the styles applied to the component
	 */
    className?: string;
}
