import React from 'react';
import {Modal as RBModal} from 'react-bootstrap';

type ModalFooterProps = {
    onConfirm?: (() => void) | null;
    confirmBtnText?: string;
    cancelBtnText?: string;
    onHide?: () => void;
    className?: string;
    confirmDisabled?: boolean;
    cancelDisabled?: boolean;
    confirmBtnClassName?: string;
}

const ModalFooter = ({
    onConfirm,
    onHide,
    cancelBtnText,
    confirmBtnText,
    className = '',
    confirmDisabled,
    cancelDisabled,
    confirmBtnClassName = '',
}: ModalFooterProps) : JSX.Element => (
    <RBModal.Footer className={`modal__footer d-flex flex-row-reverse align-items-center ${className}`}>
        {onConfirm && (
            <button
                className={`btn modal__confirm-btn margin-left-10 ${confirmBtnClassName || 'btn-primary'}`}
                onClick={onConfirm}
                disabled={confirmDisabled}
            >
                {confirmBtnText || 'Confirm'}
            </button>
        )}
        {onHide && (
            <button
                className='btn btn-link modal__cancel-btn margin-0 padding-0'
                onClick={onHide}
                disabled={cancelDisabled}
            >
                {cancelBtnText || 'Cancel'}
            </button>
        )}
    </RBModal.Footer>
);

export default ModalFooter;
