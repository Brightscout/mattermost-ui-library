import React from 'react';

import {ModalFooterProps} from './ModalFooter';
import {ModalFooterWrapper} from './ModalFooter.styles';

/**
 * ModalFooter component
 *
 * @example Correct usage
 * <ModalFooter
 *      primary={<Button variant='primary'>{'Submit'}</Button>}
 *      secondary={<Button variant='tertiary'>{'Close'}</Button>}
 * />
 */
export const ModalFooter = (props: ModalFooterProps) => {
    const {primary, secondary} = props;
    return (
        <ModalFooterWrapper className='mm=modalFooter'>
            {secondary}
            {primary}
        </ModalFooterWrapper>);
};