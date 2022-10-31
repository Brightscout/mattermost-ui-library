import React from 'react';

export interface ModalFooterProps {

    /**
     * Primary action component
     */
    primary: React.ReactNode;

    /**
     * Secondary action component
     */
    secondary?: React.ReactNode;
}