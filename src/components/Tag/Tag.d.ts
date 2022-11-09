import {placementType} from '@Components/Tooltip/Tooltip';

// Variant Types for label
export type TagVariantType = 'general' | 'info' | 'warning' | 'success';

// Interface for the tooltip with tag
export interface tagWithTooltip {

    /**
     * Text to be displayed in the tooltip
     */
    text: string;

    /**
     * Placement of the tooltip with respect to the wrapper
     */
    placement: placementType;
}

// Types common to all types of tag
export interface CommonProps {

    /**
     * Text to be rendered in the tag
     */
    text: string;

    /**
     * If passed with an object of text and placement would render a tooltip on hovering the tag
     *
     * @default false
     */
    tooltip?: tagWithTooltip;
}

// Interface for the label tag
export interface LabelTag extends CommonProps{

    /**
     * Label type tag
     */
    type: 'label';

    /**
     * Variant of the label tag
     */
    variant: TagVariantType;
}

// Interface for the shortcut tag
export interface ShortcutTag extends CommonProps {

    /**
     * Shortcut tag
     */
    type: 'shortcut';
}

// Interface for the highlight tag
export interface HighlightTag extends CommonProps {

    /**
     * Highlight tag
     */
    type: 'highlight';
}

// Type of tag props
export type TagProps = LabelTag | ShortcutTag | HighlightTag
