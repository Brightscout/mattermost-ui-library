import {Tooltip} from 'react-bootstrap';
import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

// styling for styled tooltip
export const StyledTooltip = styled(Tooltip)({
    '.tooltip-inner': {
        background: colors.tooltipBg,
        border: 'none',
        borderRadius: 4,
    },

    // styling for the tooltip with placement top
    '&.top .tooltip-arrow': {
        borderTopColor: colors.tooltipBg,
    },

    // styling for the tooltip with placement bottom
    '&.bottom .tooltip-arrow': {
        borderBottomColor: colors.tooltipBg,
    },

    // styling for the tooltip with placement right
    '&.right .tooltip-arrow': {
        borderRightColor: colors.tooltipBg,
    },

    // styling for the tooltip with placement left
    '&.left .tooltip-arrow': {
        borderLeftColor: colors.tooltipBg,
    },
});

export const Text = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    fontSize: 12,
    fontWeight: 600,
});

export const Hint = styled.div({
    fontSize: 10,
    color: colors.tooltipHint,
});
