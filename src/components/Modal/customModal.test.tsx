import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

// Mock data
import {customModalChildrenClass, customModalChildren, customModalProps} from '@Constants/mockData/modal';

import CustomModal from '.';

describe('CustomModal', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<CustomModal {...customModalProps}>{customModalChildren}</CustomModal>);
    });

    afterEach(() => {
        component.unmount();
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(customModalProps.className)).toBeTruthy();
    });

    it('Should render the children correctly', () => {
        const modalChildren = document.querySelector(`.${customModalChildrenClass}`);
        expect(modalChildren).toBeInTheDocument();
    });
});
