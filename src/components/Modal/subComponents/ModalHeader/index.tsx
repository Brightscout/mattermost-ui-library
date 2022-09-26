import React from 'react';
import {Modal as RBModal} from 'react-bootstrap';

type ModalHeaderProps = {
    title?: string | JSX.Element;
    onHide: () => void;
    showCloseIconInHeader?: boolean;
    className?: string;
}

const ModalHeader = ({
    title,
    showCloseIconInHeader,
    onHide,
    className = '',
}: ModalHeaderProps) : JSX.Element => (
    <>{(title || showCloseIconInHeader) && (
        <RBModal.Header className={`modal__header ${className}`}>
            <div className='modal__title d-flex align-items-center justify-content-between'>
                {title && <p className='modal__title text-ellipsis font-size-20 wt-500 margin-0'>{title}</p>}
                {showCloseIconInHeader && (
                    <button
                        className='style--none'
                        onClick={onHide}
                    >
                        <i className='icon icon-close modal__close-icon cursor-pointer font-size-20'/>
                    </button>
                )}
            </div>
        </RBModal.Header>
    )}
    </>
);

export default ModalHeader;
