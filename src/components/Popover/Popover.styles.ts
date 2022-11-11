import styled from 'styled-components';
import {Popover} from 'react-bootstrap';

import Colors from '@Styles/colorsForJs.module.scss';

// Styles for the pop over
export const StyledPopover = styled(Popover)<{ elevation: boolean }>(
    ({elevation}) => ({
        margin: 8,
        borderRadius: 4,
        boxShadow: elevation ? Colors.elevation1 : 'none',

        // removing arrow
        '& .arrow': {
            display: 'none',
        },

        '& *': {
            cursor: 'pointer',
        },
    }),
);

// Styles for the event pass container
export const EventPassContainer = styled.div({
    cursor: 'pointer',

    '& .mm-icon': {
        pointerEvents: 'none',
    },
});
