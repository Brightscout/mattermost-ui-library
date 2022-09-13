import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

import CustomModal from '.';

// Mock props data
const customModalChildrenClass = 'custom-modal-children';
const customModalChildren = <div className={customModalChildrenClass}>{'Custom Modal'}</div>;
const customModalProps = {
    show: true,
    onHide: jest.fn,
    className: 'custom-modal-class',
};

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

    it('Should apply the passed className prop', () => {
        expect(component.hasClass(customModalProps.className)).toBeTruthy();
    });

    it('Should render the children correctly', () => {
        const modalChildren = document.querySelector(`.${customModalChildrenClass}`);
        expect(modalChildren).toBeInTheDocument();
    });
});
