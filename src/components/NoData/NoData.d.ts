import {IconProps} from '@Components/Icon/Icon';

export interface IconContainerProps {

    /**
     * Color of Icon container
     */
    iconBgColor: string;
}

export interface NoDataProps extends IconContainerProps {

    /**
     * Name of icon to be displayed on the component
     */
    iconName: IconProps['name'];

    /**
     * Text to be displayed as a description of no data
     */
    message: string;

    /**
     * To override or extend the styles applied to the component
     */
    className?: string;
}
