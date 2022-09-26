
// Mock data for "ToggleSwitch" component
export const toggleSwitchOnChangeHandler = jest.fn();
export const toggleSwitchLabel = 'Toggle switch label';
export const toggleSwitchProps = {
    active: true,
    onChange: toggleSwitchOnChangeHandler,
    label: toggleSwitchLabel,
    labelPositioning: 'left' as ToggleSwitchLabelPositioning,
};
