// Mock data for "AutoSuggest" component tests
export const onInputValueChange = jest.fn();
export const onOptionClick = jest.fn();
export const suggestionConfig = {
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
