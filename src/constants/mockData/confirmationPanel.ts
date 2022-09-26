// Mock data for "ConfirmationPanel" component
export const hideHandler = jest.fn();
export const confirmHandler = jest.fn();
export const confirmationPanelProps = {
    confirmationMsg: 'Dialog Message',
    onHide: hideHandler,
    onConfirm: confirmHandler,
    loading: true,
    className: 'confirmation-dialog-class',
    error: 'Dialog error',
};
