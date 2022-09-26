import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import ModalLoader from '@Components/Modal/subComponents/ModalLoader';
import ModalHeader from '@Components/Modal/subComponents/ModalHeader';
import ConfirmationPanel from '@Components/ConfirmationPanel';

// Mock data
import {confirmHandler, hideHandler, confirmationDialogProps} from '@Constants/mockData/confirmationDialog';

import ConfirmationDialog from '.';

describe('ConfirmationDialog', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<ConfirmationDialog {...confirmationDialogProps} />);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
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
        expect(component.contains(<ModalLoader loading={confirmationDialogProps.loading} />)).toBeTruthy();
    });
});
