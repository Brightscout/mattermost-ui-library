import React from 'react';

type ModalSubtitleAndErrorProps = {
    subTitle?: string | JSX.Element;
    error?: string | JSX.Element;
}

const ModalSubtitleAndError = ({
    subTitle,
    error,
}: ModalSubtitleAndErrorProps) : JSX.Element => (
    <>
        {subTitle && <p className='modal__subtitle margin-0 margin-bottom-15'>{subTitle}</p>}
        {error && <p className='modal__error margin-left-15 margin-bottom-10 error-text text-capitalize'>{error}</p>}
    </>
);

export default ModalSubtitleAndError;
