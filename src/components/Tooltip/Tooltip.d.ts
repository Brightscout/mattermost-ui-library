import {OverlayTriggerProps} from 'react-bootstrap';

import {IconType} from '@Components/Icon';

/**
 * Types for position
 *
 * `auto` - renders on the side where more space is available
 *
 * `top` - renders on the top of the wrapped component
 *
 * `right` - renders on the right of the wrapped component
 *
 * `bottom` - renders on the bottom of the wrapped component
 *
 * `left` - renders on the left of the wrapped component
 */
type placementType = 'auto' | 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps extends Pick<OverlayTriggerProps, 'children'> {

    /**
	 * Placement of the tooltip with respect to the wrapped component
	 */
    placement: placementType;

    /**
	 * Text to be displayed in the tooltip
	 */
    text: string;

    /**
	 * Low-emphasis text which adds more details
	 */
    hint?: string;

    /**
	 * Icon to be displayed in the tooltip
	 */
    iconName?: Exclude<IconType, 'Spinner'>;
}
