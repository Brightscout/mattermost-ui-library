import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

import AutoSuggest, {AutoSuggestProps} from '.';

// Mock functions
const onInputValueChange = jest.fn();
const onOptionClick = jest.fn();

// Mock data
const suggestionConfig = {
    suggestions: [{
        label: 'Label 1',
        value: 'Value 1',
    }, {
        label: 'Label 2',
        value: 'Value 2',
    }, {
        label: 'Label 3',
        value: 'Value 3',
    }],
    renderValue: (suggestion: Record<string, string>) => suggestion.label,
};

type AutoSuggestComponentProps = Omit<AutoSuggestProps, 'inputValue' | 'onInputValueChange' | 'onOptionClick' | 'suggestionConfig'> & {
    emptySuggestions?: boolean
};

const AutoSuggestComponent = ({emptySuggestions, ...props}: AutoSuggestComponentProps) => (
    <AutoSuggest
        {...props}
        inputValue='Label'
        onInputValueChange={onInputValueChange}
        onOptionClick={onOptionClick}
        suggestionConfig={emptySuggestions ? {suggestions: [], renderValue: () => ''} : suggestionConfig}
    />
);

const clickAutoSuggest = (component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>) => component.find('input[type="checkbox"]').simulate('click');

describe('AutoSuggest', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<AutoSuggestComponent/>);
    });

    afterEach(() => {
        component.unmount();
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should show the loader when "loading" prop is passed', () => {
        const wrapper = mount(<AutoSuggestComponent loadingSuggestions={true}/>);
        expect(wrapper.find('.auto-suggest__loader').exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    it('Should show the error message when "error" prop is passed', () => {
        const errorMsg = 'Error Message';
        const wrapper = mount(<AutoSuggestComponent error={errorMsg}/>);
        expect(wrapper.find('.auto-suggest__err-text').text().includes(errorMsg)).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    it('Should hide the suggestions when the input isn\'t focused', () => {
        expect(component.find('ul.auto-suggest__suggestions').hasClass('auto-suggest__suggestions--open')).toBeFalsy();
    });

    it('Should hide the character threshold warning when the input isn\'t focused', () => {
        const wrapper = mount(<AutoSuggestComponent charThresholdToShowSuggestions={8}/>);
        expect(wrapper.find('.auto-suggest__get-suggestion-warn').exists()).toBeFalsy();
        wrapper.unmount();
    });

    it('Should be in focused state when clicked', () => {
        clickAutoSuggest(component);
        const textField = component.find('input.auto-suggest__input');
        expect(textField.is(':focus')).toBe(true);
    });

    it('Should not show the suggestions when the input is focused but character threshold isn\'t reached', () => {
        const wrapper = mount(<AutoSuggestComponent charThresholdToShowSuggestions={8}/>);
        clickAutoSuggest(wrapper);
        expect(wrapper.find('ul.auto-suggest__suggestions').hasClass('auto-suggest__suggestions--open')).toBeFalsy();
        expect(wrapper.find('.auto-suggest__get-suggestion-warn').exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    it('Should show the suggestions when the input is focused and character threshold is reached', () => {
        clickAutoSuggest(component);
        expect(component.find('ul.auto-suggest__suggestions').hasClass('auto-suggest__suggestions--open')).toBeTruthy();
        expect(component.find('.auto-suggest__suggestion')).toHaveLength(3);
        expect(component.find('.auto-suggest__get-suggestion-warn').exists()).toBeFalsy();
        expect(component).toMatchSnapshot();
    });

    it('Should show the empty state when "suggestions" are empty and character threshold is reached', () => {
        const wrapper = mount(<AutoSuggestComponent emptySuggestions={true}/>);
        clickAutoSuggest(wrapper);
        expect(wrapper.find('ul.auto-suggest__suggestions').hasClass('auto-suggest__suggestions--open')).toBeTruthy();
        expect(wrapper.find('.auto-suggest__suggestion').exists()).toBeTruthy();
        expect(wrapper.find('.auto-suggest__suggestion').text().includes('Nothing to show')).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });
});
