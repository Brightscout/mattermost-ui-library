import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import Tabs from '.';

// Mock props data
const tabPanelClass = 'tab-panel-class';
const tabsProps = {
    tabs: [{
        title: 'Tab 1',
        tabPanel: <div className={tabPanelClass}>{'tab-panel-1'}</div>,
    }, {
        title: 'Tab 2',
        tabPanel: <div className={tabPanelClass}>{'tab-panel-2'}</div>,
    }],
    tabsClassName: 'tabs-class',
};

describe('ToggleSwitch', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<Tabs {...tabsProps} />);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed className prop', () => {
        expect(component.hasClass(tabsProps.tabsClassName)).toBeTruthy();
    });

    it('Should render all the passed tabs', () => {
        expect(component.find(`.${tabPanelClass}`)).toHaveLength(tabsProps.tabs.length);
    });
});
