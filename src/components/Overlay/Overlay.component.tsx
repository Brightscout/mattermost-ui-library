import React, {useRef} from 'react';

import useOutsideClick from '@Hooks/useClickOutside';

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
	 * This closes the popover on clicking anywhere outside the popover wrapper
     * @param ref - the ref of the wrapper
     * @param handler - the outside click handler
	 */
    useOutsideClick(EventPassContainerRef, () => {
        if (setShow) {
            setShow(false);
        }
    });

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
