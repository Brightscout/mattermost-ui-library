import React from 'react';
import {ReactWrapper, mount} from 'enzyme';

// Mock data
import {inputFieldProps} from '@Constants/mockData/inputField';

import InputField from '.';

describe('InputField', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(
            <InputField
                type='text'
                {...inputFieldProps}
            />,
        );
    });

    afterEach(() => {
        component.unmount();
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(inputFieldProps.className)).toBeTruthy();
    });

    it('Should render the label correctly', () => {
        expect(component.text().includes(inputFieldProps.label)).toBeTruthy();
    });

    it('Should render the error correctly', () => {
        expect(component.find('.form-group__err-text').text().includes(inputFieldProps.error)).toBeTruthy();
    });
});
