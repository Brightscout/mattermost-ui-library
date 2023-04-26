import React, {useRef, useEffect} from 'react';

import {OverlayProps} from './Overlay';
import {OverlayContainer, StyledPopover, EventPassContainer} from './Overlay.styles';

export const Overlay = ({
    show,
    popoverBody,
    children,
    placement = 'top',
    elevation = false,
    className = '',
    setShow,
}: OverlayProps) => {
    const EventPassContainerRef = useRef<HTMLDivElement>(null);

    /**
	 * Function which closes the popover on clicking anywhere outside the popover wrapper
	 * @param {MouseEvent} e - gets the element on which the onClick event is acted upon
	 */
    const onPopoverCloseHandler = (e: MouseEvent) =>
        e.target !== EventPassContainerRef.current && setShow?.(false);

    // On clicking anywhere other than the wrapped component the pop-over closes
    useEffect(() => {
        document.body.addEventListener('click', onPopoverCloseHandler);

        return () => {
            document.body.removeEventListener('click', onPopoverCloseHandler);
        };
    }, []);

    const handleClick = () => setShow && setShow((prev) => !prev);

    return (
        <OverlayContainer>
            <StyledPopover
                show={show}
                className={`mm-popover ${className}`}
                elevation={elevation}
                placement={placement}
            >
                {popoverBody}
            </StyledPopover>
            <EventPassContainer
                tabIndex={0}
                ref={EventPassContainerRef}
                onClick={handleClick}
            >
                {children}
            </EventPassContainer>
        </OverlayContainer>
    );
};
