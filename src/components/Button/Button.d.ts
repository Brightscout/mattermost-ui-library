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
 *
 * `text` - Button like a link with no background color and less padding
 */
export type VariantType = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'text';

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
 * Button's size types
 *
 * `xs` - Button height = 24
 *
 * `sm` - Button height = 32
 *
 * `md` - Button height = 40
 *
 * `lg` - Button height = 48
 */
export type ButtonSizeTypes = 'xs' | 'sm' | 'md' | 'lg';

/**
 * Type for button properties
 */
export type ButtonSizeProperties = 'height' | 'fontSize' | 'padding' | 'lineHeight';

/**
 * Type for button color map
 */
export type ButtonSizeMap = Record<ButtonSizeTypes, Record<ButtonSizeProperties, string>>;

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

    /**
	 * Button sizes
	 *
	 * @default 'md'
	 */
    size?: ButtonSizeTypes;

    /**
	 * The inverted style of button
	 *
	 * @default false
	 */
    inverted?: boolean;

    /**
	 * The destructive style of button
	 *
	 * @default false
	 */
    destructive?: boolean;

    /**
	 * The width of the button
	 * @default fit-content
	 */
    width?: string;
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
