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
 * Type for Button State
 */
export type ButtonState = 'default' | 'hover' | 'active' | 'disabled';

/**
 * Type for Button Color Map
 */
export type ButtonColorMap = Record<VariantType, Record<ButtonState, string>>;

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
		*
		* @default start
		*/
    iconPosition?: IconPositionType;

    /**
		* if 'true' Button occupies full width
		*
		* @default false
		*/
    fullWidth?:boolean;

}

/**
 * Interface for Button Component
 */
export interface ButtonProps extends Omit<StyledButtonProps, 'variant'> {

    /**
		 * The variant of the Button component
		 *
		 * @default primary
		 */
    variant?: VariantType;

    /**
		 * The content of the component
		 */
    children: React.ReactNode;

    /**
		 * If 'true' the component is disabled
		 *
		 * @default false
		 */
    disabled?: boolean;

    /**
		 * Name of the icon to use in component
		 */
    iconName?: IconType;

    /**
		 * To override or extend the styles applied to the component
		 */
    className?: string;

    /**
		 * Perform action on the Button Click
		 */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
