import React from 'react';
import {OverlayTrigger, Popover as BootstrapPopover} from 'react-bootstrap';

type PopoverProps = {
    placement?: PopoverPlacement;
    popoverBody: JSX.Element;
    children: JSX.Element;
    className?: string;
}

const Popover = ({
    placement = 'bottom',
    children,
    popoverBody,
    className = '',
}: PopoverProps): JSX.Element => (
    <OverlayTrigger
        placement={placement}
        trigger='focus'
        delay={300}
        overlay={
            <BootstrapPopover
                id='popover'
                className={className}
            >
                {popoverBody}
            </BootstrapPopover>
        }
    >
        {children}
    </OverlayTrigger>
);

export default Popover;
