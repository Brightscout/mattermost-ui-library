import React from 'react';
import {Modal as RBModal} from 'react-bootstrap';

import ModalHeader from './subComponents/ModalHeader';
import ModalLoader from './subComponents/ModalLoader';
import ModalBody from './subComponents/ModalBody';
import ModalFooter from './subComponents/ModalFooter';
import ModalSubtitleAndError from './subComponents/ModalSubtitleAndError';

type ModalProps = {
    show: boolean;
    onHide: () => void;
    showCloseIconInHeader?: boolean;
    children?: JSX.Element;
    title?: string | JSX.Element;
    subTitle?: string | JSX.Element;
    onConfirm?: () => void;
    confirmBtnText?: string;
    cancelBtnText?: string;
    className?: string;
    loading?: boolean;
    error?: string | JSX.Element;
    confirmDisabled?: boolean;
    cancelDisabled?: boolean;
    confirmBtnClassName?: string;
}

const Modal = ({
    show,
    onHide,
    showCloseIconInHeader = true,
    children,
    title,
    subTitle,
    onConfirm,
    confirmBtnText,
    cancelBtnText,
    className = '',
    loading = false,
    error,
    confirmDisabled,
    cancelDisabled,
    confirmBtnClassName,
}: ModalProps) => (
    <RBModal
        show={show}
        onHide={onHide}
        centered={true}
        className={`modal ${className}`}
    >
        <ModalHeader
            title={title}
            showCloseIconInHeader={showCloseIconInHeader}
            onHide={onHide}
        />
        <ModalLoader loading={loading}/>
        <ModalBody>
            <>
                <ModalSubtitleAndError
                    subTitle={subTitle}
                />
                {children}
                <ModalSubtitleAndError
                    error={error}
                />
            </>
        </ModalBody>
        <ModalFooter
            onHide={onHide}
            onConfirm={onConfirm}
            cancelBtnText={cancelBtnText}
            confirmBtnText={confirmBtnText}
            cancelDisabled={cancelDisabled}
            confirmDisabled={confirmDisabled}
            confirmBtnClassName={confirmBtnClassName}
        />
    </RBModal>
);

export default Modal;
