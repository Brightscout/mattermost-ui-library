import {IconProps} from '@Components/Icon/Icon';

export interface NoDataProps {

    /**
     * Name of icon to be displayed on the component
     */
    iconName: IconProps['name'];

    /**
     * Text to be displayed as a description of no data
     */
    message: string;
}
