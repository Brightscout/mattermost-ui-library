import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

import ResultPanel from '.';

// Mock props data
const primaryBtnHandler = jest.fn();
const secondaryBtnHandler = jest.fn();
const primaryBtnText = 'Primary Button';
const secondaryBtnText = 'Secondary Button';
const resultPanelProps = {
    iconClass: 'icon-class',
    header: 'Result Panel Header',
    className: 'result-panel-class',
    primaryBtn: {
        text: primaryBtnText,
        onClick: primaryBtnHandler,
    },
    secondaryBtn: {
        text: secondaryBtnText,
        onClick: secondaryBtnHandler,
    },
}

describe('Result Panel', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<ResultPanel {...resultPanelProps} />);
    })

    afterEach(() => {
        component.unmount();
        jest.clearAllMocks();
    })

    it('Should render correctly and matches snapshot', () => {
        expect(component).toMatchSnapshot();
    })

    it('Should apply the passed className prop', () => {
        expect(component.hasClass(resultPanelProps.className)).toBeTruthy();
    })

    it('Should apply the class to the icon', () => {
        expect(component.find('.result-panel-icon').hasClass(resultPanelProps.iconClass)).toBeTruthy();
    })

    it('Should call the onClick handler when the primary button is clicked', () => {
        component.find('.btn-primary').simulate('click');
        expect(primaryBtnHandler).toHaveBeenCalledTimes(1);
    })

    it('Should call the onClick handler when the cancel button is clicked', () => {
        component.find('.btn-link').simulate('click');
        expect(secondaryBtnHandler).toHaveBeenCalledTimes(1);
    })

    describe('Result Panel - skip rendering the buttons', () => {
        beforeEach(() => {
            component = mount(<ResultPanel header={resultPanelProps.header} />);
        })

        it('Shouldn\'t render the primary button when "primaryBtn" prop isn\'t passed', () => {
            expect(component.find('.btn-primary').exists()).toBeFalsy();
        })

        it('Shouldn\'t render the secondary button when "secondaryBtn" prop isn\'t passed', () => {
            expect(component.find('.btn-link').exists()).toBeFalsy();
        })
    })
})
