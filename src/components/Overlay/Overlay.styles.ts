import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

import {placementType} from './Overlay';

// Styles for Overlay container
export const OverlayContainer = styled.div({
    position: 'relative',
});

// Returns placement styles for the overlay around the trigger
const getPlacement = (placement: placementType) => {
    switch (placement) {
    case 'top': return {
        bottom: '100%',
        right: '50%',
        transform: 'translateX(50%)',
        marginBottom: 4,
    };
    case 'bottom': return {
        top: '100%',
        right: '50%',
        transform: 'translateX(50%)',
        marginTop: 4,
    };
    case 'right': return {
        bottom: '50%',
        transform: 'translateY(50%)',
        left: '100%',
        marginLeft: 4,
    };
    case 'left': return {
        bottom: '50%',
        transform: 'translateY(50%)',
        right: '100%',
        marginRight: 4,
    };
    case 'top-end' : return {
        bottom: '100%',
        right: 0,
        marginBottom: 4,
    };
    case 'right-start' : return {
        top: 0,
        left: '100%',
        marginLeft: 4,
    };
    case 'bottom-end': return {
        top: '100%',
        right: 0,
        marginTop: 4,
    };
    default:
        return {};
    }
};

// Styles for the pop over
export const StyledPopover = styled.div<{ elevation?: boolean; placement: placementType; show: boolean }>(
    ({elevation, placement, show}) => ({

        opacity: show ? 1 : 0,
        position: 'absolute',
        borderRadius: 4,
        backgroundColor: Colors.centerChannelBg,
        border: `1px solid ${Colors.centerChannel_16}`,
        zIndex: 1060,
        maxWidth: '276px',
        minWidth: 'max-content',
        boxShadow: elevation ? Colors.elevation1 : 'none',
        transition: 'opacity 0.15s linear',

        // removing arrow
        '& .arrow': {
            display: 'none',
        },

        '& *': {
            cursor: 'pointer',
        },

        ...getPlacement(placement),
    }),
);

// Styles for the event pass container
export const EventPassContainer = styled.div({
    width: 'fit-content',
    cursor: 'pointer',

    '& > *': {
        pointerEvents: 'none',
    },
});
