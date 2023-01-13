import {TabsProps as BootstrapTabProps, TabProps} from 'react-bootstrap';

export interface TabsConfig {

    /**
   * Key to determine each tab uniquely
   */
    key: TabProps['eventKey'];

    /**
     * Title to be displayed on tab button
     */
    title: TabProps['title'];

    /**
     * Content to be displayed when tab is opened
     */
    content: TabProps['children'];

}

export interface TabsProps extends BootstrapTabProps {

    /**
     * Configuration for rendering tabs
     */
    tabsConfig: TabsConfig[];

    /**
     * Have all Tabs proportionately fill all available width.
     * @default false
     */
    fill?: boolean;

    /**
     * Have all Tabs evenly fill all available width
     * @default true
     */
    justify?: boolean;

    /**
     * Flag to make tabs header sticky
     * @default true
     */
    stickyHeader?: boolean;
}
