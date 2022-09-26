// Mock data for "ResultPanel" component
export const primaryBtnHandler = jest.fn();
export const secondaryBtnHandler = jest.fn();
export const primaryBtnText = 'Primary Button';
export const secondaryBtnText = 'Secondary Button';
export const resultPanelProps = {
    iconClass: 'icon-class',
    header: 'Result Panel Header',
    className: 'result-panel-class',
    primaryBtn: {
        text: primaryBtnText,
        onClick: primaryBtnHandler,
    },
    secondaryBtn: {
        text: secondaryBtnText,
        onClick: secondaryBtnHandler,
    },
};
