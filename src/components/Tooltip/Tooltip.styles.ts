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
    '&.tooltip.show': {
        opacity: 1,
    },

    // styling for tooltip with placement top
    '&[x-placement="top"] .arrow::before': {
        borderTopColor: colors.tooltipBg,
    },

    // styling for tooltip with placement bottom
    '&[x-placement="bottom"] .arrow::before': {
        borderBottomColor: colors.tooltipBg,
    },

    // styling for tooltip with placement right
    '&[x-placement="right"] .arrow::before': {
        borderRightColor: colors.tooltipBg,
    },

    // styling for tooltip with placement left
    '&[x-placement="left"] .arrow::before': {
        borderLeftColor: colors.tooltipBg,
    },

    svg: {
        display: 'block',
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
