import React from 'react';

import {IconType} from '@Components/Icon';

// BUTTON COMPONENT TYPES
/**
 * Button Variants Type
 *
 * primary - Button with background color ,no border and high emphasis
 *
 * secondary - Button with no background color ,with border and medium emphasis
 *
 * tertiary - Button with background color ,no border and low emphasis
 *
 * quaternary - Button with no background color ,no border and lowest emphasis
 */
export type VariantType = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

/**
 * Icon Position in Button Component
 *
 * start - Icon at left of button text
 *
 * end - Icon at right of button text
 */
export type IconPositionType = 'start' | 'end';

/**
 * Interface for Styled Button Component
 */
export interface StyledButtonProps {

    /**
	 * The variant of the Button component
	 */
    variant: VariantType;

    /**
	* Position of the Icon
	* @default start
	*/
    iconPosition?: IconPositionType;

    /**
	* width of the Button
	* @default fit-content
	*/
    width?: string | number;

    /**
	* if 'true' Button occupies full width
	* @default false
	*/
    fullWidth?:boolean;

}

/**
 * Interface for Button Component
 */
export interface ButtonProps {

    /**
	 * The content of the component
	 */
    children: React.ReactNode;

    /**
	 * The variant of the Button component
	 * @default tertiary
	 */
    variant: VariantType;

    /**
	 * If 'true' the component is disabled
	 * @default false
	 */
    disabled?: boolean;

    /**
	 * Name of the icon to use in component
	 */
    iconName?: IconType | undefined;

    /**
	 * Position of the Icon
	 * @default start
	 */
    iconPosition?: IconPositionType;

    /**
	 * width of the Button
	 * @default fit-content
	 */
    width?: string | number;

    /**
	 * if 'true' Button occupies full width
	 * @default false
	 */
    fullWidth?: boolean;

    /**
	 * Perform action on the Button Click
	 */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
