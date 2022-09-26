// Mock data for "InputField" component
export const inputChangeHandler = jest.fn();
export const inputFieldProps = {
    label: 'Input Label',
    placeholder: 'Input Placeholder',
    value: 'InputValue',
    className: 'input-field-class',
    disabled: false,
    error: 'Input field error',
    onChange: inputChangeHandler,
};
