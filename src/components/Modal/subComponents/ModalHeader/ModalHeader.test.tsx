import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

import ModalHeader from '.';

// Mock props data
const hideHandler = jest.fn();
const ModalTitle = 'Modal header';
const ModalHeaderProps = {
    onHide: hideHandler,
    showCloseIconInHeader: false,
    className: 'modal-header-class',
};

describe('Modal Header', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<ModalHeader {...ModalHeaderProps}/>);
    });

    afterEach(() => {
        component.unmount();
        jest.clearAllMocks();
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed className prop', () => {
        expect(component.hasClass(ModalHeaderProps.className)).toBeTruthy();
    });

    it('Should not render the cross button in the header if the "showCloseIconHeader" prop isn\'t falsy', () => {
        expect(component.find('.icon-close.modal__close-icon').exists()).toBeFalsy();
    });
});

describe('Modal Header - title and close button', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(
            <ModalHeader
                {...ModalHeaderProps}
                title={ModalTitle}
                showCloseIconInHeader={true}
            />,
        );
    });

    afterEach(() => {
        component.unmount();
        jest.clearAllMocks();
    });

    it('Should match snapshot when rendering title and close button also', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should render the title correctly', () => {
        expect(component.text().includes(ModalTitle)).toBeTruthy();
    });

    it('Should render the close button correctly', () => {
        expect(component.find('.icon-close.modal__close-icon').exists()).toBeTruthy();
    });

    it('Should close the modal when close button is clicked', () => {
        component.find('.header-close-btn').simulate('click');
        expect(hideHandler).toHaveBeenCalledTimes(1);
    });
});
