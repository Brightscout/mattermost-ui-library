import React from 'react';
import Tab from 'react-bootstrap/Tab';

import {StyledTabs} from './Tabs.styles';
import {TabsProps} from './Tabs';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Tabs = (props: TabsProps) => {
    const {
        tabsConfig,
        fill = false,
        justify = true,
        mountOnEnter = true,
        unmountOnExit = true,
        defaultActiveKey,
        stickyHeader = true,
        ...restProps
    } = props;

    return (
        <StyledTabs
            stickyHeader={stickyHeader}
            fill={fill}
            justify={justify}
            mountOnEnter={mountOnEnter}
            unmountOnExit={unmountOnExit}
            defaultActiveKey={defaultActiveKey}
            {...restProps}
        >
            {tabsConfig.map((tab) => (
                <Tab
                    key={tab.key}
                    eventKey={tab.key}
                    title={tab.title}
                >
                    {tab.content}
                </Tab>))}
        </StyledTabs>
    );
};

