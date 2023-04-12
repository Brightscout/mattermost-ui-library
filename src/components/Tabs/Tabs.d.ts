import {TabsProps as BootstrapTabsProps, TabProps} from 'react-bootstrap';

export interface TabsConfig {

    /**
    * Key to determine each tab uniquely
    */
    key: number;

    /**
     * Title to be displayed on tab button
     */
    title: TabProps['title'];

    /**
     * Content to be displayed when tab is opened
     */
    content: TabProps['children'];
}

export interface TabsProps extends BootstrapTabsProps {

    /**
     * Configuration for rendering tabs
     */
    tabsConfig: TabsConfig[];

    /**
     * Have all tabs evenly fill all available widths
     * @default true
     */
    justified?: boolean;

    /**
     * Flag to make tabs header sticky
     * @default true
     */
    stickyHeader?: boolean;

    /**
     * To override or extend the styles applied to the component
     * @default ''
     */
    className?: string;
}
