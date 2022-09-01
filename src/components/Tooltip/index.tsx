import React from 'react';
import {Placement} from 'react-bootstrap/esm/types';
import {OverlayTrigger, Tooltip as ReactTooltip} from 'react-bootstrap';

// Constants
import {TooltipDefaultPlacement} from '@Constants';

type TooltipProps = {
    tooltipContent: JSX.Element | string
    children: JSX.Element
    placement?: Placement
    className?: string;
}

const Tooltip = ({
    tooltipContent,
    children,
    placement = TooltipDefaultPlacement,
    className,
}: TooltipProps): JSX.Element => (
    <OverlayTrigger
        placement={placement}
        overlay={
            <ReactTooltip
                className={`tooltip ${className}`}
                placement={placement}
            >
                {tooltipContent}
            </ReactTooltip>
        }
    >
        {children}
    </OverlayTrigger>
);

export default Tooltip;
