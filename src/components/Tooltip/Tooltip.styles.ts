import {Tooltip} from 'react-bootstrap';
import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

// styling for styled tooltip
export const StyledTooltip = styled(Tooltip)({
    '.tooltip-inner': {
        background: colors.tooltipBg,
        border: 'none',
    },

    // styling for tooltip with placement top
    '&[x-placement="top"] .tooltip-arrow::before': {
        borderTopColor: colors.tooltipBg,
        transform: 'translateY(1px)',
    },

    // styling for tooltip with placement bottom
    '&[x-placement="bottom"] .tooltip-arrow::before': {
        borderBottomColor: colors.tooltipBg,
        transform: 'translateY(-1px)',
    },

    // styling for tooltip with placement right
    '&[x-placement="right"] .tooltip-arrow::before': {
        borderRightColor: colors.tooltipBg,
        transform: 'translateX(-1px)',
    },

    // styling for tooltip with placement left
    '&[x-placement="left"] .tooltip-arrow::before': {
        borderLeftColor: colors.tooltipBg,
        transform: 'translateX(1px)',
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
});

export const Hint = styled.div({
    fontSize: 10,
    color: colors.tooltipHint,
});
