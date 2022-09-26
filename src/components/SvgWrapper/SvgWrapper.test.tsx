import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

// Mock data
import {svgWrapperChildren, svgWrapperClassName} from '@Constants/mockData/svgWrapper';

import SvgWrapper from '.';

describe('SvgWrapper', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<SvgWrapper className={svgWrapperClassName}>{svgWrapperChildren}</SvgWrapper>);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(svgWrapperClassName)).toBeTruthy();
    });

    it('Should render the children correctly', () => {
        expect(component.contains(svgWrapperChildren)).toBeTruthy();
    });
});
