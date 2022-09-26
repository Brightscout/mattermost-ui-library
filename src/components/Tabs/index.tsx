import React from 'react';
import {Tabs as ReactBootstrapTabs, Tab} from 'react-bootstrap';

type TabsProps = {
    tabs: TabData[];
    tabsClassName?: string;
}

const Tabs = ({
    tabs,
    tabsClassName = '',
}: TabsProps) => (
    <ReactBootstrapTabs className={`tabs ${tabsClassName}`}>
        {tabs.map((tabData, index) => (
            <Tab
                key={tabData.title}
                eventKey={index}
                title={tabData.title}
            >
                {tabData.tabPanel}
            </Tab>
        ))}
    </ReactBootstrapTabs>
);

export default Tabs;
