import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

// Mock data
import {
    TooltipChildren,
    TooltipContent,
    TooltipClassName
} from '@Constants/mockData/tooltip';

import Tooltip from '.';

describe('Tooltip', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(
            <Tooltip
                className={TooltipClassName}
                tooltipContent={TooltipContent}
            >
                {TooltipChildren}
            </Tooltip>,
        );
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should render the children correctly', () => {
        expect(component.contains(TooltipChildren)).toBeTruthy();
    });
});
