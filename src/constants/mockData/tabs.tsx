import React from 'react';

// Mock data for "Tabs" component
export const tabPanelClass = 'tab-panel-class';
export const tabsProps = {
    tabs: [{
        title: 'Tab 1',
        tabPanel: <div className={tabPanelClass}>{'tab-panel-1'}</div>,
    }, {
        title: 'Tab 2',
        tabPanel: <div className={tabPanelClass}>{'tab-panel-2'}</div>,
    }],
    tabsClassName: 'tabs-class',
};
