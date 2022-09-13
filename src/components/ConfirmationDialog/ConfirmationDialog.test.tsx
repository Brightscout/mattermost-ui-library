import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import ModalLoader from '@Components/Modal/subComponents/ModalLoader';
import ModalHeader from '@Components/Modal/subComponents/ModalHeader';
import ConfirmationPanel from '@Components/ConfirmationPanel';

import ConfirmationDialog from '.';

// Mock props data
const hideHandler = jest.fn();
const confirmHandler = jest.fn();
const confirmationDialogProps = {
    title: 'Dialog Title',
    confirmationMsg: 'Dialog Message',
    show: true,
    onHide: hideHandler,
    loading: true,
    onConfirm: confirmHandler,
    className: 'confirmation-dialog-class',
    error: 'Dialog error',
};

describe('ConfirmationDialog', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<ConfirmationDialog {...confirmationDialogProps}/>);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed className prop', () => {
        expect(component.hasClass(confirmationDialogProps.className)).toBeTruthy();
    });

    it('Should render the header correctly', () => {
        expect(component.contains(
            <ModalHeader
                title={confirmationDialogProps.title}
                onHide={hideHandler}
                showCloseIconInHeader={true}
            />,
        )).toBeTruthy();
    });

    it('Should render the confirmationPanel correctly', () => {
        expect(component.contains(
            <ConfirmationPanel
                loading={confirmationDialogProps.loading}
                onHide={hideHandler}
                onConfirm={confirmHandler}
                confirmationMsg={confirmationDialogProps.confirmationMsg}
                error={confirmationDialogProps.error}
            />,
        )).toBeTruthy();
    });

    it('Should show the loader when "loading" prop is true', () => {
        expect(component.contains(<ModalLoader loading={confirmationDialogProps.loading}/>)).toBeTruthy();
    });
});
