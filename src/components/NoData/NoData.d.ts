import {IconProps} from '@Components/Icon/Icon';

export interface NoDataProps {

    /**
     * Name of icon to be displayed on component
     */
    iconName: IconProps['name'];

    /**
     * Text to be displayed as description of no data
     */
    message: string;
}
