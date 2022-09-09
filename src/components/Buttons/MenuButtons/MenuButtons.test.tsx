import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import MenuButtons from '.';

// Mock functions
const onBtnClick = jest.fn();

// Mock data for props
const Icon = <i className='icon icon-globe' />
const buttons = [{
    text: 'Button Text',
    icon: Icon,
    onClick: onBtnClick,
}, {
    text: 'Button Text 2',
    icon: Icon,
    onClick: onBtnClick,
}];

describe('MenuButtons', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(() => {
        component = shallow(<MenuButtons buttons={buttons} className='menu-btn' />);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should render the passed icon from the props', () => {
        expect(component.containsMatchingElement(Icon)).toBeTruthy();
    });

    it('Should render the passed button text from the props', () => {
        expect(component.text().includes('Button Text')).toBeTruthy();
    });

    it('Should apply the passed className prop', () => {
        expect(component.hasClass('menu-btn')).toBeTruthy();
    })

    it('Should render all the buttons passed as props', () => {
        expect(component.find('.menu-btn .button-menu__btn')).toHaveLength(2);
    })
})
