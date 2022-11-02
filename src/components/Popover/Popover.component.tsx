import React, {useEffect, useRef, useState} from 'react';
import {OverlayTrigger} from 'react-bootstrap';
import {OverlayTriggerRenderProps} from 'react-bootstrap/esm/OverlayTrigger';

import {PopoverProps} from './Popover';
import {EventPassContainer, StyledPopover} from './Popover.styles';

/**
 * Popover component
 *
 * @example Correct usage
 *
 * ```ts
 * <Popover
 *  placement='auto'
 *  popoverBody={<Component />}
 * >
 *  <Icon name='menu dots' />
 * </Popover>
 * ```
 */
export const Popover = (props: PopoverProps) => {
    const {children, placement, popoverBody, elevation, className = ''} = props;
    const [show, setShow] = useState(false);

    const EventPassContainerRef = useRef<HTMLDivElement>(null);

    /**
     * Toggler for popover component
     * @param {boolean} e - state of popover, wether being shown or not
     */
    const onToggleHandler = (e:boolean) => {
        setShow(e);
    };

    /**
     * Function which closes the popover on clicking anywhere other than popover wrapped element
     * @param {MouseEvent} e - gets the element on which the on click event acted upon
     *
     */
    const onPopoverCloseHandler = (e: MouseEvent) => {
        if (e.target === EventPassContainerRef.current) {
            return;
        }

        if (show) {
            setShow(false);
        }
    };

    // Function to render popover body
    const renderedPopover = (renderedPopoverProps: OverlayTriggerRenderProps) => (
        <StyledPopover
            elevation={elevation}
            className={`mm-popover ${className}`}
            {...renderedPopoverProps}
        >
            {popoverBody}
        </StyledPopover>
    );

    // On clicking anywhere other than the wrapped component the pop over closes
    useEffect(() => {
        document.body.addEventListener('click', onPopoverCloseHandler);

        return () => {
            document.body.removeEventListener('click', onPopoverCloseHandler);
        };
    });

    return (
        <OverlayTrigger
            key={placement}
            placement={placement}
            flip={true}
            overlay={renderedPopover}
            trigger={'click'}
            show={show}
            onToggle={onToggleHandler}
        >
            {/*
                Since all child components wont be spreading props, the event wont be able to reach down.
                Therefore passing the event to a div which wraps the children
            */}
            <EventPassContainer
                ref={EventPassContainerRef}
            >
                {children}
            </EventPassContainer>
        </OverlayTrigger>);
};
