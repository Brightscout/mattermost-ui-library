import React from 'react';

import {Icon} from '@Components/Icon';

import {ModalHeaderProps} from './ModalHeader';
import {
    IconButton,
    ModalHeaderRow,
    ModalHeaderSubtitle,
    ModalHeaderTitle,
    ModalHeaderWrapper,
} from './ModalHeader.styles';

/**
 * ModalHeader Component
 *
 * @example
 * ```ts
 * <ModalHeader
 *      title='Modal Header'
        subtitle='Modal Subtitle'
        onCloseHandler={onHideHandler}
 * />
 * ```
 */
export const ModalHeader = (props: ModalHeaderProps) => {
    const {title, subtitle, onCloseHandler} = props;
    return (
        <ModalHeaderWrapper className='mm-modalHeader'>
            <ModalHeaderRow>
                <ModalHeaderTitle className='mm-modalHeaderTitle'>
                    {title}
                </ModalHeaderTitle>
                <IconButton onClick={onCloseHandler}>
                    <Icon
                        name='Close'
                        size={20}
                    />
                </IconButton>
            </ModalHeaderRow>
            {subtitle && (
                <ModalHeaderSubtitle className='mm-modalHeaderSubtitle'>
                    {subtitle}
                </ModalHeaderSubtitle>
            )}
        </ModalHeaderWrapper>
    );
};
