import React from 'react';
import {OverlayTrigger} from 'react-bootstrap';

import {Icon} from '@Components/Icon';

import {TooltipProps} from './Tooltip';
import {Hint, Text, StyledTooltip} from './Tooltip.styles';

/**
 * Tooltip Component
 *
 * @example Correct usage
 *
 * ```ts
 * <Tooltip text='text'>
 *   <SomeComponent/>
 * </Tooltip>
 * ```
 * @example usage with icon and hint text
 *
 * ```ts
 * <Tooltip text='text' hint='hint text' iconName='Edit'>
 *   <SomeComponent/>
 * </Tooltip>
 * ```
 */
export const Tooltip = (props: TooltipProps) => {
    const {children, placement, iconName, text, hint} = props;

    const tooltip = (
        <StyledTooltip
            id='tooltip'
        >
            <Text>
                {iconName &&
                <Icon
                    name={iconName}
                    size={12}
                />}
                {text}
            </Text>
            {hint && <Hint>{hint}</Hint>}
        </StyledTooltip>
    );

    return (
        <OverlayTrigger
            placement={placement}
            delay={400}
            overlay={tooltip}
        >
            {children}
        </OverlayTrigger>
    );
};
