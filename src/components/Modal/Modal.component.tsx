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
        onCloseHandler,
        title,
        subtitle,
        onSubmitHandler,
        primaryActionText,
        secondaryActionText,
        className = '',
        backdrop = 'static',
    } = props;

    return (
        <ModalWrapper
            onHide={onCloseHandler}
            show={show}
            backdrop={backdrop}
            className={`mm-modal ${className}`}
        >
            <ModalHeader
                title={title}
                subtitle={subtitle}
                onCloseHandler={onCloseHandler}
            />
            <ModalBody> {children} </ModalBody>
            <ModalFooter
                onCloseHandler={onCloseHandler}
                onSubmitHandler={onSubmitHandler}
                primaryActionText={primaryActionText}
                secondaryActionText={secondaryActionText}
            />
        </ModalWrapper>
    );
};
