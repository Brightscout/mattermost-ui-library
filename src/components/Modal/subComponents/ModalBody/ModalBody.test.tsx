import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

// Mock data
import {modalBodyChildren, modalBodyClassName} from '@Constants/mockData/modal';

import ModalBody from '.';

describe('Modal Body', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<ModalBody className={modalBodyClassName}>{modalBodyChildren}</ModalBody>);
    });

    afterEach(() => {
        component.unmount();
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(modalBodyClassName)).toBeTruthy();
    });

    it('Should render the children correctly', () => {
        expect(component.contains(modalBodyChildren)).toBeTruthy();
    });
});
