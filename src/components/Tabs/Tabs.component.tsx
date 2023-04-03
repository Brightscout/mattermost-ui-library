import React from 'react';
import {Tab} from 'react-bootstrap';

import {StyledTabs} from './Tabs.styles';
import {TabsConfig, TabsProps} from './Tabs';

export const Tabs = (props: TabsProps) => {
    const {
        tabsConfig,
        justified = false,
        mountOnEnter = true,
        unmountOnExit = true,
        stickyHeader = true,
        className = '',
    } = props;

    return (
        <StyledTabs
            stickyHeader={stickyHeader}
            justified={justified}
            mountOnEnter={mountOnEnter}
            unmountOnExit={unmountOnExit}
            className={`mm-tabs ${className}`}
        >
            {tabsConfig.map((tab: TabsConfig) => (
                <Tab
                    key={tab.key as number}
                    eventKey={tab.key as number}
                    title={tab.title}
                    tabClassName='nav-item'
                >
                    {tab.content}
                </Tab>))}
        </StyledTabs>
    );
};

