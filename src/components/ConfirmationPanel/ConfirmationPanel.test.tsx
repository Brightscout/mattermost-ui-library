import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import ModalBody from '@Components/Modal/subComponents/ModalBody';
import ModalFooter from '@Components/Modal/subComponents/ModalFooter';
import ModalSubtitleAndError from '@Components/Modal/subComponents/ModalSubtitleAndError';

// Mock data
import {confirmHandler, hideHandler, confirmationPanelProps} from '@Constants/mockData/confirmationPanel';

import ConfirmationPanel from '.';

describe('ConfirmationPanel', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<ConfirmationPanel {...confirmationPanelProps}/>);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(confirmationPanelProps.className)).toBeTruthy();
    });

    it('Should render the message correctly', () => {
        expect(component.contains(
            <ModalBody>
                <p className='margin-top-10 margin-h-0 margin-bottom-15'>{confirmationPanelProps.confirmationMsg}</p>
            </ModalBody>,
        )).toBeTruthy();
    });

    it('Should render the error correctly', () => {
        expect(component.contains(
            <ModalSubtitleAndError error={confirmationPanelProps.error}/>,
        )).toBeTruthy();
    });

    it('Should render the footer correctly', () => {
        expect(component.contains(
            <ModalFooter
                onConfirm={confirmHandler}
                onHide={hideHandler}
                confirmBtnText='Delete'
                cancelBtnText='Cancel'
                confirmDisabled={confirmationPanelProps.loading}
                cancelDisabled={confirmationPanelProps.loading}
                className='padding-v-12 padding-h-15'
            />,
        )).toBeTruthy();
    });
});
