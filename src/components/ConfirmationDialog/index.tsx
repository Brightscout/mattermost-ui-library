import React from 'react';

// Components
import Modal from '@Components/Modal/customModal';
import ConfirmationModal from '@Components/ConfirmationPanel';
import ModalHeader from '@Components/Modal/subComponents/ModalHeader';
import ModalLoader from '@Components/Modal/subComponents/ModalLoader';

type ConfirmationDialogProps = {
    title: string;
    confirmationMsg: string;
    show: boolean;
    onHide: () => void;
    loading?: boolean;
    onConfirm: () => void;
    className?: string;
    error?: string | JSX.Element;
}

const ConfirmationDialog = ({
    title,
    confirmationMsg,
    show,
    onHide,
    loading,
    onConfirm,
    className = '',
    error,
}: ConfirmationDialogProps) => (
    <Modal
        show={show}
        onHide={onHide}
        className={`delete-confirmation-dialog ${className}`}
    >
        <>
            <ModalHeader
                title={title}
                onHide={onHide}
                showCloseIconInHeader={true}
            />
            <ModalLoader loading={loading}/>
            <ConfirmationModal
                loading={loading}
                onHide={onHide}
                onConfirm={onConfirm}
                confirmationMsg={confirmationMsg}
                error={error}
            />
        </>
    </Modal>
);

export default ConfirmationDialog;
