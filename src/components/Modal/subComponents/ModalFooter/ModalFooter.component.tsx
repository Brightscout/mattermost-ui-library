import React from 'react';

import {Button} from '@Components/Button';

import {ModalFooterProps} from './ModalFooter';
import {ModalFooterWrapper} from './ModalFooter.styles';

/**
 * ModalFooter component
 *
 * @example Correct usage
 * <ModalFooter
 *  primaryActionText='Submit'
 *  secondaryActionText='Close'
 *  onSubmitHandler={onSubmitHandler}
 *  onCloseHandler={onCloseHandler}
 * />
 *
 */
export const ModalFooter = (props: ModalFooterProps) => {
    const {
        onCloseHandler,
        onSubmitHandler,
        primaryActionText,
        secondaryActionText,
        isPrimaryButtonDisabled = false
    } = props;
    return (
        <ModalFooterWrapper className='mm-modalFooter'>
            <Button
                variant='tertiary'
                onClick={onCloseHandler}
            >
                {secondaryActionText || 'Close'}
            </Button>
            <Button
                variant='primary'
                onClick={onSubmitHandler}
                disabled={isPrimaryButtonDisabled}
            >
                {primaryActionText || 'Submit'}
            </Button>
        </ModalFooterWrapper>
    );
};
