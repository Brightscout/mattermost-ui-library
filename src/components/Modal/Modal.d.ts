import React from 'react';

import {ModalFooterProps} from './subComponents/ModalFooter';
import {ModalHeaderProps} from './subComponents/ModalHeader';

export interface ModalProps extends ModalHeaderProps, ModalFooterProps {

    /**
     * The content of the modal
     */
    children?: React.ReactNode;

    /**
     * State of the modal
     * When `true`, the modal is visible
     */
    show: boolean;

    /**
     * 'true' for a backdrop that triggers the "onHide" when clicked.
     * 'static' for a backdrop that doesn't trigger the "onHide" when clicked.
     * 'false' to remove the backdrop
     *
     * @default 'static'
     */
    backdrop?: 'static' | boolean;

    /**
     * To override or extend the styles applied to the component
     */
    className?: string;
}
