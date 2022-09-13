import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import SvgWrapper from '.';

// Mock props data
const svgWrapperChildren = <span>{'Mock Svg'}</span>;
const svgWrapperClassName = 'svg-wrapper-class';

describe('SvgWrapper', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<SvgWrapper className={svgWrapperClassName}>{svgWrapperChildren}</SvgWrapper>);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed className prop', () => {
        expect(component.hasClass(svgWrapperClassName)).toBeTruthy();
    });

    it('Should render the children correctly', () => {
        expect(component.contains(svgWrapperChildren)).toBeTruthy();
    });
});
