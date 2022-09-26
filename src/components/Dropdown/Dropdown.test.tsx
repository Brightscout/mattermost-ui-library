import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

// Mock data
import {onChangeHandler, dropdownOptions, dropdownPlaceholder} from '@Constants/mockData/dropdown';

import Dropdown, {DropdownProps} from '.';

type DropdownComponentProps = Omit<DropdownProps, 'value' | 'placeholder' | 'onChange' | 'options'> & {
    provideOptions?: boolean;
};

const DropdownComponent = ({provideOptions = true, ...props}: DropdownComponentProps) => (
    <Dropdown
        {...props}
        value={null}
        placeholder={dropdownPlaceholder}
        onChange={onChangeHandler}
        options={provideOptions ? dropdownOptions : []}
    />
);

const clickDropdown = (wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>, checked: boolean) => wrapper.find('input[type="checkbox"]').simulate('change', {target: {checked}});

describe('Dropdown', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<DropdownComponent/>);
    });

    afterEach(() => {
        component.unmount();
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should show the loader when "loadingOptions" prop is passed', () => {
        const wrapper = mount(<DropdownComponent loadingOptions={true}/>);
        expect(wrapper.find('.plugin-dropdown__loader').exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    it('Should show the error message when "error" prop is passed', () => {
        const errorMsg = 'Error Message';
        const wrapper = mount(<DropdownComponent error={errorMsg}/>);
        expect(wrapper.find('.plugin-dropdown__err-text').text().includes(errorMsg)).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    it('Should not show the options when the input isn\'t checked', () => {
        expect(component.find('ul.plugin-dropdown__options-list').hasClass('plugin-dropdown__options-list--open')).toBeFalsy();
    });

    it('Should toggle showing the options when clicked', () => {
        clickDropdown(component, true);
        expect(component.find('.plugin-dropdown__options-list').hasClass('plugin-dropdown__options-list--open')).toBeTruthy();
        expect(component.find('.plugin-dropdown__option-item')).toHaveLength(dropdownOptions.length);
        expect(component).toMatchSnapshot();
        clickDropdown(component, false);
        expect(component.find('ul.plugin-dropdown__options-list').hasClass('plugin-dropdown__options-list--open')).toBeFalsy();
    });

    it('Should show the empty state when "options" are empty', () => {
        const wrapper = mount(<DropdownComponent provideOptions={false}/>);
        clickDropdown(wrapper, true);
        expect(wrapper.find('.plugin-dropdown__option-item')).toHaveLength(1);
        expect(wrapper.find('.plugin-dropdown__option-item').text().includes('Nothing to show')).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    it('Should render the customOption correctly', () => {
        const customOptionClickHandler = jest.fn();
        const customOptionConfig = {
            label: 'Custom option label',
            value: 'Custom option value',
            onClick: customOptionClickHandler,
        };
        const wrapper = mount(<DropdownComponent customOption={customOptionConfig}/>);
        expect(wrapper.find('.plugin-dropdown__custom-option').exists()).toBeTruthy();
        wrapper.find('.plugin-dropdown__custom-option').simulate('click');
        expect(customOptionClickHandler).toHaveBeenCalledTimes(1);
        expect(wrapper).toMatchSnapshot();
    });
});
