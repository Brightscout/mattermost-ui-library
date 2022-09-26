import React, {forwardRef} from 'react';

import {CheckIcon} from '@Components/Icons';

type ResultPanelProps = {
    iconClass?: string | null;
    header: string | null;
    className?: string;
    primaryBtn?: {
        text: string,
        onClick: (() => void) | null,
    }
    secondaryBtn?: {
        text: string,
        onClick: (() => void) | null,
    }
};

const ResultPanel = forwardRef<HTMLDivElement, ResultPanelProps>(({
    header,
    className = '',
    primaryBtn,
    secondaryBtn,
    iconClass,
}: ResultPanelProps, resultPanelRef): JSX.Element => (
    <div
        className={`modal__body modal-body d-flex align-items-center justify-content-center flex-column wizard__secondary-panel ${className}`}
        ref={resultPanelRef}
    >
        {iconClass ? (
            <i className={`fa result-panel-icon ${iconClass ?? 'fa-check-circle-o'}`}/>
        ) : (
            <CheckIcon className='result-panel-icon'/>
        )}
        <h2 className='font-16 margin-v-25 text-center text-capitalize'>{header}</h2>
        {primaryBtn?.onClick && (
            <button
                className='btn btn-primary'
                onClick={primaryBtn.onClick}
            >
                {primaryBtn.text}
            </button>
        )}
        {secondaryBtn?.onClick && (
            <button
                className='btn btn-link margin-top-12 padding-0'
                onClick={secondaryBtn.onClick}
            >
                {secondaryBtn.text}
            </button>
        )}
    </div>
));

export default ResultPanel;
