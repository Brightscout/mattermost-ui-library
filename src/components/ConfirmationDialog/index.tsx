import React from 'react';

// Components
import Modal from '@Components/Modal/customModal';
import ConfirmationModal from '@Components/ConfirmationPanel';
import ModalHeader from '@Components/Modal/subComponents/ModalHeader';
import ModalLoader from '@Components/Modal/subComponents/ModalLoader';

type ConfirmationDialogProps = {
    show: boolean;
    onHide: () => void;
    loading?: boolean;
    onConfirm: () => void;
    className?: string;
}

const ConfirmationDialog = ({
    show,
    onHide,
    loading,
    onConfirm,
    className = '',
}: ConfirmationDialogProps) => (
    <Modal
        show={show}
        onHide={onHide}
        className={`delete-confirmation-dialog ${className}`}
    >
        <>
            <ModalHeader
                title='Confirm Delete Feed'
                onHide={onHide}
                showCloseIconInHeader={true}
            />
            <ModalLoader loading={loading}/>
            <ConfirmationModal
                loading={loading}
                onHide={onHide}
                onConfirm={onConfirm}
            />
        </>
    </Modal>
);

export default ConfirmationDialog;
