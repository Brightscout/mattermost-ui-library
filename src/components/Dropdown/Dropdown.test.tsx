import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

import Dropdown, {DropdownProps} from '.';

// Mock functions
const onChangeHandler = jest.fn();

// Mock props data
const dropdownOptions = [{
    label: 'Dropdown label 1',
    value: 'Dropdown value 1',
}, {
    label: 'Dropdown label 2',
    value: 'Dropdown value 2',
}, {
    label: 'Dropdown label 3',
    value: 'Dropdown value 3',
}];
const dropdownPlaceholder = 'Dropdown placeholder';

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

const clickDropdown = (component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>, checked: boolean) => component.find('input[type="checkbox"]').simulate('change', {target: {checked}});

describe('Dropdown', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<DropdownComponent />);
    })

    afterEach(() => {
        component.unmount();
    })

    it('Should render correctly and matches snapshot', () => {
        expect(component).toMatchSnapshot();
    })

    it('Should show the loader when "loadingOptions" prop is passed', () => {
        const component = mount(<DropdownComponent loadingOptions />);
        expect(component.find('.plugin-dropdown__loader').exists()).toBeTruthy();
        expect(component).toMatchSnapshot();
        component.unmount();
    })

    it('Should show the error message when "error" prop is passed', () => {
        const errorMsg = 'Error Message';
        const component = mount(<DropdownComponent error={errorMsg} />);
        expect(component.find('.plugin-dropdown__err-text').text().includes(errorMsg)).toBeTruthy();
        expect(component).toMatchSnapshot();
        component.unmount();
    })

    it('Shouldn\'t show the options when the input isn\'t checked', () => {
        expect(component.find('ul.plugin-dropdown__options-list').hasClass('plugin-dropdown__options-list--open')).toBeFalsy();
    })

    it('Should toggle showing the options when clicked', () => {
        clickDropdown(component, true);
        expect(component.find('.plugin-dropdown__options-list').hasClass('plugin-dropdown__options-list--open')).toBeTruthy();
        expect(component.find('.plugin-dropdown__option-item')).toHaveLength(dropdownOptions.length);
        expect(component).toMatchSnapshot();
        clickDropdown(component, false);
        expect(component.find('ul.plugin-dropdown__options-list').hasClass('plugin-dropdown__options-list--open')).toBeFalsy();

    })

    it('Should show the empty state when "options" are empty', () => {
        const component = mount(<DropdownComponent provideOptions={false} />);
        clickDropdown(component, true);
        expect(component.find('.plugin-dropdown__option-item')).toHaveLength(1);
        expect(component.find('.plugin-dropdown__option-item').text().includes('Nothing to show')).toBeTruthy();
        expect(component).toMatchSnapshot();
        component.unmount();
    })

    it('Should render the customOption correctly', () => {
        const customOptionClickHandler = jest.fn();
        const customOptionConfig = {
            label: 'Custom option label',
            value: 'Custom option value',
            onClick: customOptionClickHandler,
        };
        const component = mount(<DropdownComponent customOption={customOptionConfig} />);
        expect(component.find('.plugin-dropdown__custom-option').exists()).toBeTruthy();
        component.find('.plugin-dropdown__custom-option').simulate('click');
        expect(customOptionClickHandler).toHaveBeenCalledTimes(1);
        expect(component).toMatchSnapshot();
    })

});
