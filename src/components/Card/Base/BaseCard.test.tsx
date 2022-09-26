import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

// Mock data
import {BaseCardChildren} from '@Constants/mockData/card';

import BaseCard from '.';

describe('BaseCard', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<BaseCard className='base-card'>{BaseCardChildren}</BaseCard>);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should render the passed children', () => {
        expect(component.containsMatchingElement(BaseCardChildren)).toBeTruthy();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass('base-card')).toBeTruthy();
    });
});
