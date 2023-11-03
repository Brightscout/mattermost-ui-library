import React from 'react';

import {ModalProps} from './Modal';
import {ModalBody, ModalWrapper} from './Modal.styles';
import {ModalFooter} from './subComponents/ModalFooter';
import {ModalHeader} from './subComponents/ModalHeader';

/**
 * Modal Component
 *
 * @example Correct usage
 *
 * ```ts
 * <Modal
 *  show={show}
 *  title='Header Title'
 *  subtitle='Header Subtitle'
 *  primaryActionText='Submit'
 *  secondaryActionText='Close'
 *  onCloseHandler={onCloseHandler}
 *  onSubmitHandler={onSubmitHandler}
 * >
 *  {Modal Content to appear on body}
 * </Modal>
 * ```
 *
 */
export const Modal = (props: ModalProps) => {
    const {
        children,
        show,
        onFooterCloseHandler,
        onHeaderCloseHandler,
        title,
        subtitle,
        onSubmitHandler,
        primaryActionText,
        secondaryActionText,
        className = '',
        backdrop = 'static',
        isPrimaryButtonDisabled = false,
    } = props;

    return (
        <ModalWrapper
            onHide={onHeaderCloseHandler}
            show={show}
            backdrop={backdrop}
            className={`mm-modal ${className}`}
        >
            <ModalHeader
                title={title}
                subtitle={subtitle}
                onHeaderCloseHandler={onHeaderCloseHandler}
            />
            <ModalBody>{children}</ModalBody>
            <ModalFooter
                onFooterCloseHandler={onFooterCloseHandler}
                onSubmitHandler={onSubmitHandler}
                primaryActionText={primaryActionText}
                secondaryActionText={secondaryActionText}
                isPrimaryButtonDisabled={isPrimaryButtonDisabled}
            />
        </ModalWrapper>
    );
};
