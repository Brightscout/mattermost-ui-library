import React from 'react';

export interface ModalProps {

    /**
     * The content of the component
     */
    children?: React.ReactNode;

    /**
     * State of the modal
     * When `true`, the modal shows
     */
    show: boolean;

    /**
     * 'true' for a backdrop that triggers an "onHide" when clicked.
     * 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
     * 'false' to remove the backdrop
     *
     * @default 'static'
     */
    backdrop?: 'static' | boolean;

    /**
     * Callback function which is to be triggered onHide scenarios
     */
    onCloseHandler: ()=>void;

    /**
     * To override or extend the styles applied to the component
     */
    className?: string;
}