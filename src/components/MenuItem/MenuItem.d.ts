import React from 'react';

/**
 * Types of position for the secondary label
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
	 * Secondary label to describe the main label in detail
	 */
    secondaryLabel?: string;

    /**
	 * Position of the secondary label
	 */
    secondaryLabelPosition?: SecondaryLabelPositionType;

    /**
	 * Leading element in the menu item
	 */
    leadingElement?: JSX.Element;

    /**
	 * Trailing element in the menu item
	 */
    trailingElement?: JSX.Element;

    /**
     * If 'true', the component is disabled
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * if 'true', the component will have destructive styles
     *
     * @default false
     */
    destructive?: boolean;

    /**
	 * Callback to be triggered on clicking the Menu Item
	 */
    onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;

    /**
	 * Callback to be triggered when mouse is entering the Menu Item
	 */
    onMouseEnter?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;

    /**
	 * Callback to be triggered when mouse is leaving the Menu Item
	 */
    onMouseLeave?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;

    /**
	 * To override or extend the styles applied to the component
	 */
    className?: string;
}
