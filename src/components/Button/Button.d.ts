import React from 'react';

import {IconType} from '@Components/Icon';

/**
 * Button variants type
 *
 * `primary` - Button with background color, no border and high emphasis
 *
 * `secondary` - Button with no background color, with border and medium emphasis
 *
 * `tertiary` - Button with background color, no border and low emphasis
 *
 * `quaternary` - Button with no background color, no border and lowest emphasis
 */
export type VariantType = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

/**
 * Icon position in the component
 *
 * `start` - Icon at left of button text
 *
 * `end` - Icon at right of button text
 */
export type IconPositionType = 'start' | 'end';

/**
 * Type for button state
 */
export type ButtonState = 'default' | 'hover' | 'active' | 'disabled';

/**
 * Type for button color map
 */
export type ButtonColorMap = Record<VariantType, Record<ButtonState, string>>;

/**
 * Interface for styled button component
 */
export interface StyledButtonProps {

    /**
		 * The variant of the button component
		 */
    variant: VariantType;

    /**
		* Position of the icon
		*
		* @default start
		*/
    iconPosition?: IconPositionType;

    /**
		* if `true`, button occupies full width
		*
		* @default false
		*/
    fullWidth?:boolean;
}

/**
 * Interface for button component
 */
export interface ButtonProps extends Omit<StyledButtonProps, 'variant'> {

    /**
		 * The variant of the component
		 *
		 * @default primary
		 */
    variant?: VariantType;

    /**
		 * The content of the component
		 */
    children: React.ReactNode;

    /**
		 * If `true`, the component is disabled
		 *
		 * @default false
		 */
    disabled?: boolean;

    /**
		 * Name of the icon to use in the component
		 */
    iconName?: IconType;

    /**
		 * To override or extend the styles applied to the component
		 */
    className?: string;

    /**
		 * Perform action on the button click
		 */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
