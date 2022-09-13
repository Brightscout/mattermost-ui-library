import React from 'react';
import {ReactWrapper, mount} from 'enzyme';

import Popover from '.';

// Mock props data
const PopoverChildrenClass = 'popover-children-class';
const PopoverBodyClass = 'popover-body-class';
const PopoverChildren = <span className={PopoverChildrenClass}>{'Mock Svg'}</span>;
const PopoverClassName = 'popover-class';
const PopoverBody = <span className={PopoverBodyClass}>{'Popover body'}</span>;

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
