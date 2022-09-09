import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import Tooltip from '.';

// Mock props data
const TooltipChildrenClass = 'tooltip-children-class';
const TooltipContentClass = 'tooltip-content-class';
const TooltipChildren = <span className={TooltipChildrenClass}>Mock Svg</span>;
const TooltipClassName = 'tooltip-class';
const TooltipContent = <span className={TooltipContentClass}>Tooltip content</span>;

describe('Tooltip', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(() => {
        component = shallow(<Tooltip className={TooltipClassName} tooltipContent={TooltipContent}>{TooltipChildren}</Tooltip>);
    })

    afterAll(() => {
        jest.clearAllTimers();
    })

    it('Should render correctly and matches snapshot', () => {
        expect(component).toMatchSnapshot();
    })

    it('Should render the children correctly', () => {
        expect(component.contains(TooltipChildren)).toBeTruthy();
    })
})
