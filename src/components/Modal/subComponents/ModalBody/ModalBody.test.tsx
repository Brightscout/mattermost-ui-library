import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

import ModalBody from '.';

// Mock props data
const modalBodyChildren = <div>{'Modal Body Children'}</div>;
const modalBodyClassName = 'modal-body-class';

describe('Modal Body', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<ModalBody className={modalBodyClassName}>{modalBodyChildren}</ModalBody>);
    });

    afterEach(() => {
        component.unmount();
    });

    it('Should render correctly and matches snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed className prop', () => {
        expect(component.hasClass(modalBodyClassName)).toBeTruthy();
    });

    it('Should render the children correctly', () => {
        expect(component.contains(modalBodyChildren)).toBeTruthy();
    });
});
