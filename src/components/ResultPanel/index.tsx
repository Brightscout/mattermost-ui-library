import React, {forwardRef} from 'react';

import {CheckIcon} from '@Components/Icons';

type ResultPanelProps = {
    iconClass?: string | null;
    header: string | null;
    className?: string;
    primaryBtn?: {
        text: string;
        onClick: (() => void) | null;
    };
    secondaryBtn?: {
        text: string;
        onClick: (() => void) | null;
    };
};

const ResultPanel = forwardRef<HTMLDivElement, ResultPanelProps>(({
    header,
    className = '',
    primaryBtn,
    secondaryBtn,
    iconClass,
}: ResultPanelProps, resultPanelRef): JSX.Element => (
    <div
        className={`modal__body modal-body wizard__secondary-panel ${className}`}
        ref={resultPanelRef}
    >
        <div className='padding-h-12 padding-v-15 d-flex align-items-center justify-content-center flex-column'>
            {iconClass ? (
                <i className={`fa result-panel-icon ${iconClass ?? 'fa-check-circle-o'}`}/>
            ) : (
                <CheckIcon className='result-panel-icon'/>
            )}
            <h2 className='result-panel-text font-16 margin-v-25 text-center'>{header}</h2>
        </div>
        <div className='modal-footer d-flex flex-row-reverse padding-h-12 padding-v-15'>
            {primaryBtn?.onClick && (
                <button
                    className='btn btn-primary plugin-btn'
                    onClick={primaryBtn.onClick}
                >
                    {primaryBtn.text}
                </button>
            )}
            {secondaryBtn?.onClick && (
                <button
                    className='btn btn-link padding-0 plugin-btn margin-right-10'
                    onClick={secondaryBtn.onClick}
                >
                    {secondaryBtn.text}
                </button>
            )}
        </div>
    </div>
));

export default ResultPanel;
