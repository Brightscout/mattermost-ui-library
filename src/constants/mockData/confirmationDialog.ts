
// Mock data for "ConfirmationDialog" component
export const hideHandler = jest.fn();
export const confirmHandler = jest.fn();
export const confirmationDialogProps = {
    title: 'Dialog Title',
    confirmationMsg: 'Dialog Message',
    show: true,
    onHide: hideHandler,
    loading: true,
    onConfirm: confirmHandler,
    className: 'confirmation-dialog-class',
    error: 'Dialog error',
};
