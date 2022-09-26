import React from 'react';
import {ReactWrapper, mount} from 'enzyme';

// Mock data
import {PopoverChildrenClass, PopoverChildren, PopoverClassName, PopoverBody} from '@Constants/mockData/popover'

import Popover from '.';

describe('Popover', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(
            <Popover
                className={PopoverClassName}
                popoverBody={PopoverBody}
            >
                {PopoverChildren}
            </Popover>,
        );
    });

    afterEach(() => {
        component.unmount();
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should render the children correctly', () => {
        expect(component.find(`.${PopoverChildrenClass}`).exists()).toBeTruthy();
    });
});
