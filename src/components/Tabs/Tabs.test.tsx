import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

// Mock data
import {tabPanelClass, tabsProps} from '@Constants/mockData/tabs';

import Tabs from '.';

describe('Tabs', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<Tabs {...tabsProps}/>);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(tabsProps.tabsClassName)).toBeTruthy();
    });

    it('Should render all the passed tabs', () => {
        expect(component.find(`.${tabPanelClass}`)).toHaveLength(tabsProps.tabs.length);
    });
});
