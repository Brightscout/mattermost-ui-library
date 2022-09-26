import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

// Mock data
import {checkboxLabel, changeHandler} from '@Constants/mockData/checkbox';

import Checkbox from '.';

describe('Checkbox', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(
            <Checkbox
                checked={true}
                label={checkboxLabel}
                className='custom-checkbox-class'
                onChange={changeHandler}
            />,
        );
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass('custom-checkbox-class')).toBeTruthy();
    });

    it('Should render the passed label correctly', () => {
        expect(component.text().includes(checkboxLabel)).toBeTruthy();
    });

    it('Should fire change event when clicked', () => {
        const clickCheckbox = (clickNumber: number, checked: boolean) => {
            component.find('input[type="checkbox"]').simulate('change', {target: {checked}});
            expect(changeHandler).toHaveBeenCalledTimes(clickNumber);
        };

        // Click the checkbox
        clickCheckbox(1, true);
        clickCheckbox(2, false);
    });
});
