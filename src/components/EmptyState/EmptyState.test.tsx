import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

// Mock data
import {buttonActionHandler, emptyStateProps} from '@Constants/mockData/emtpyState';

import EmptyState from '.';

describe('EmptyState', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<EmptyState {...emptyStateProps}/>);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(emptyStateProps.className)).toBeTruthy();
    });

    it('Should render the icon correctly', () => {
        expect(component.contains(emptyStateProps.icon)).toBeTruthy();
    });

    it('Should render the title correctly', () => {
        expect(component.text().includes(emptyStateProps.title)).toBeTruthy();
    });

    it('Should render the subTitle correctly', () => {
        expect(component.text().includes(emptyStateProps.subTitle)).toBeTruthy();
    });

    it('Should render the button text correctly', () => {
        expect(component.find('button.empty-state__btn').text().includes(emptyStateProps.buttonConfig.text)).toBeTruthy();
    });

    it('Should call the click handler when the button is clicked', () => {
        component.find('button.empty-state__btn').simulate('click');
        expect(buttonActionHandler).toHaveBeenCalledTimes(1);
    });

    it('Should render the link correctly', () => {
        expect(component.find('a.empty-state__btn').text().includes(emptyStateProps.buttonConfig.text)).toBeTruthy();
    });
});
