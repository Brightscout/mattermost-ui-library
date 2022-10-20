import IconMap from './Icon.map';

export type IconType = keyof typeof IconMap;

export interface StyledContainerProps {

    /**
	 * Size of the icon
	 */
    size: number;

    /**
	 * Color of the icon
	 */
    iconColor?: string;
}

export interface IconProps {

    /**
	 * Name of the icon from the icon map
	 */
    name: IconType;

    /**
	 * Color of the icon based on available options
	 * @default var(--default-icon-color)
	 */
    iconColor?: string;

    /**
	 * Size of the icon
	 * @default 24
	 */
    size?: number;

    /**
	 * view-box of the icon
	 */
    viewBox?: string;
}
