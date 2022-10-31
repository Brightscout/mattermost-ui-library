import React from 'react';

import {ModalProps} from './Modal';
import {ModalWrapper} from './Modal.styles';

/**
 * Modal Component
 *
 * @example Correct usage
 *
 * ```ts
 * <Modal show={show} onCloseHandler={onHideHandler}>
 * 	<ModalHeader
 * 		title='Modal Title'
 * 		subTitle='Modal Subtitle'
 * 		onCloseHandler={onHideHandler}
 *  />
 *  <ModalBody>
 * 		{
 * 			content
 * 		}
 *  </ModalBody>
 *  <ModalFooter
 *  	primary={<Button variant='primary'>{'Submit'}</Button>}
 *      secondary={<Button variant='tertiary'>{'Close'}</Button>}
 *  />
 * </Modal>
 * ```
 *
 */
export const Modal = (props: ModalProps) => {
    const {children, show, onCloseHandler, className = '', backdrop = 'static'} = props;

    return (
        <ModalWrapper
            onHide={onCloseHandler}
            show={show}
            backdrop={backdrop}
            className={`mm-modal ${className}`}
        >
            {children}
        </ModalWrapper>
    );
};
