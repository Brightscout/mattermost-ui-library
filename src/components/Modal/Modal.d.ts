import React from 'react';

import type {ModalFooterProps} from './subComponents/ModalFooter';
import type {ModalHeaderProps} from './subComponents/ModalHeader';

export type ModalProps = ModalHeaderProps & ModalFooterProps & {

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
