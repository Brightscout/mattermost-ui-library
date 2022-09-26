import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

// Mock data
import {toggleSwitchOnChangeHandler as onChangeHandler, toggleSwitchProps} from '@Constants/mockData/toggleSwitch';

import ToggleSwitch from '.';

describe('ToggleSwitch', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<ToggleSwitch {...toggleSwitchProps}/>);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should render the label correctly', () => {
        expect(component.text().includes(toggleSwitchProps.label)).toBeTruthy();
    });

    it('Should call the onChange when the toggle-switch is clicked', () => {
        component.find('input[type="checkbox"]').simulate('change', {target: {checked: true}});
        expect(onChangeHandler).toHaveBeenCalledTimes(1);
    });

    it('Should keep the label on the left when "labelPositioning" is passed as "left"', () => {
        expect(component.find('.toggle-switch-label--left').exists()).toBeTruthy();
    });
});
