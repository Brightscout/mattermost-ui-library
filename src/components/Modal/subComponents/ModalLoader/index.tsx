import React from 'react';

import LinearLoader from '@Components/Loader/Linear';

type ModalLoaderProps = {
    loading?: boolean;
    className?: string,
}

const ModalLoader = ({loading, className = ''}: ModalLoaderProps): JSX.Element => (
    <div className={`modal__loader-container position-relative ${className}`}>
        {loading && <LinearLoader/>}
    </div>
);

export default ModalLoader;
