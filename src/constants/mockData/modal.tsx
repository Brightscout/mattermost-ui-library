import React from 'react';

// Mock data for Modal SubComponents

// ModalBody
export const modalBodyChildren = <div>{'Modal Body Children'}</div>;
export const modalBodyClassName = 'modal-body-class';

// ModalFooter
export const modalFooterConfirmHandler = jest.fn();
export const modalFooterHideHandler = jest.fn();
export const confirmBtnText = 'Confirm Btn';
export const cancelBtnText = 'Cancel Btn';
export const modalFooterProps = {
    onConfirm: modalFooterConfirmHandler,
    onHide: modalFooterHideHandler,
    className: 'modal-footer-class',
    confirmDisabled: false,
    cancelDisabled: false,
    confirmBtnClassName: 'confirm-btn-class',
};

// ModalHeader
export const modalHeaderHideHandler = jest.fn();
export const ModalTitle = 'Modal header';
export const ModalHeaderProps = {
    onHide: modalHeaderHideHandler,
    showCloseIconInHeader: false,
    className: 'modal-header-class',
};

// ModalLoader
export const ModalLoaderClassName = 'modal-loader-class';

// ModalSubtitleAndError
export const subTitle = 'Modal subtitle';
export const error = 'Modal error';

// CustomModal
export const customModalChildrenClass = 'custom-modal-children';
export const customModalChildren = <div className={customModalChildrenClass}>{'Custom Modal'}</div>;
export const customModalProps = {
    show: true,
    onHide: jest.fn,
    className: 'custom-modal-class',
};
