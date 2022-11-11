import React from 'react';
import {OverlayTriggerProps} from 'react-bootstrap';

/**
 * Types for position
 */
type placementType =
    | 'auto-start'
    | 'auto'
    | 'auto-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start';

export interface PopoverProps extends Pick<OverlayTriggerProps, 'children'> {

    /**
     * Placement of the tooltip with respect to the wrapped component
     *
     * @default `auto`
     */
    placement?: placementType;

    /**
     * Component to be rendered in the body of the popover
     */
    popoverBody: React.ReactNode;

    /**
     * Elevation for the popover
     *
     * @default false
     */
    elevation?: boolean;

    /**
     * To override or extend the styles applied to the component
     */
    className?: string;
}
