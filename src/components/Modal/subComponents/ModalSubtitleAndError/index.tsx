import React from 'react';

type ModalSubTitleAndErrorProps = {
    subTitle?: string | JSX.Element;
    error?: string | JSX.Element;
}

const ModalSubTitleAndError = ({
    subTitle,
    error,
}: ModalSubTitleAndErrorProps) : JSX.Element => (
    <>
        {subTitle && <p className='modal__subtitle margin-0 margin-bottom-15'>{subTitle}</p>}
        {error && <p className='modal__error margin-0 margin-bottom-10 error-text text-center text-capitalize'>{error}</p>}
    </>
);

export default ModalSubTitleAndError;
