import React, {ReactNode} from 'react';

/**
 * Types for position
 */
type PlacementType =
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-end'
    | 'right-start'
    | 'bottom-end';

export interface OverlayProps {

    children: ReactNode;

    /**
     * Boolean flag to show if the Overlay is open or not
     */
    show: boolean;

    /**
     * Placement of the tooltip with respect to the wrapped component
     *
     * @default top
     */
    placement?: PlacementType;

    /**
     * Elevation for the popover
     *
     * @default false
     */
    elevation?: boolean;

    /**
     * Component to be rendered in the body of the popover
     */
    popoverBody: React.ReactNode;

    /**
     * To override or extend the styles applied to the component
     * @default ''
     */
    className?: string;

    /**
     * To show and hide the Overlay
     */
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}
