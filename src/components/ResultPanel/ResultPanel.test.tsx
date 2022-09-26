import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

// Mock data
import {primaryBtnHandler, secondaryBtnHandler, resultPanelProps} from '@Constants/mockData/resultPanel';

import ResultPanel from '.';

describe('Result Panel', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<ResultPanel {...resultPanelProps}/>);
    });

    afterEach(() => {
        component.unmount();
        jest.clearAllMocks();
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(resultPanelProps.className)).toBeTruthy();
    });

    it('Should apply the class to the icon', () => {
        expect(component.find('.result-panel-icon').hasClass(resultPanelProps.iconClass)).toBeTruthy();
    });

    it('Should call the "onClick" handler when the primary button is clicked', () => {
        component.find('.btn-primary').simulate('click');
        expect(primaryBtnHandler).toHaveBeenCalledTimes(1);
    });

    it('Should call the "onClick" handler when the cancel button is clicked', () => {
        component.find('.btn-link').simulate('click');
        expect(secondaryBtnHandler).toHaveBeenCalledTimes(1);
    });
});

describe('Result Panel - skip rendering the buttons', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<ResultPanel header={resultPanelProps.header}/>);
    });

    afterEach(() => {
        component.unmount();
    });

    it('Should not render the primary button when "primaryBtn" prop isn\'t passed', () => {
        expect(component.find('.btn-primary').exists()).toBeFalsy();
    });

    it('Should not render the secondary button when "secondaryBtn" prop isn\'t passed', () => {
        expect(component.find('.btn-link').exists()).toBeFalsy();
    });
});
