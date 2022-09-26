import React, {forwardRef} from 'react';

// Components
import ModalBody from '@Components/Modal/subComponents/ModalBody';
import ModalFooter from '@Components/Modal/subComponents/ModalFooter';
import ModalSubtitleAndError from '@Components/Modal/subComponents/ModalSubtitleAndError';

type ConfirmationPanelProps = {
    confirmationMsg: string;
    onHide: () => void;
    onConfirm?: (() => void) | null;
    loading?: boolean;
    className?: string;
    error?: string | JSX.Element;
}

const ConfirmationPanel = forwardRef<HTMLDivElement, ConfirmationPanelProps>(({
    confirmationMsg,
    onHide,
    onConfirm,
    loading,
    className = '',
    error,
}: ConfirmationPanelProps, confirmationPanelRef) => (
    <div
        ref={confirmationPanelRef}
        className={`confirmation-panel primary-panel ${className}`}
    >
        <ModalBody>
            <p className='margin-top-10 margin-h-0 margin-bottom-15'>{confirmationMsg}</p>
        </ModalBody>
        <ModalSubtitleAndError error={error}/>
        <ModalFooter
            onConfirm={onConfirm}
            onHide={onHide}
            confirmBtnText='Delete'
            cancelBtnText='Cancel'
            confirmDisabled={loading}
            cancelDisabled={loading}
            className='padding-v-12 padding-h-15'
        />
    </div>
));

export default ConfirmationPanel;
