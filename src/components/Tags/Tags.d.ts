import {placementType} from '@Components/Tooltip/Tooltip';

// Variant Types for label
export type TagsVariantType = 'general' | 'info' | 'warning' | 'success';

// Interface for tooltip with tag
export interface tagWithTooltip {

    /**
     * Text to be displayed in the tooltip
     */
    text: string;

    /**
     * placement of the tooltip with respect to the wrapper
     */
    placement: placementType;
}

// Types common to all types of tags
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

// Interface for label tags
export interface LabelTags extends CommonProps{

    /**
     * Label type tag
     */
    type: 'label';

    /**
     * Variant of label tag
     */
    variant: TagsVariantType;
}

// Interface for shortcut tag
export interface ShortcutTags extends CommonProps {

    /**
     * Shortcut tag
     */
    type: 'shortcut';
}

// Interface for highlight tag
export interface HighlightTags extends CommonProps {

    /**
     * Highlight tag
     */
    type: 'highlight';
}

// Type of tag props
export type TagsProps = LabelTags | ShortcutTags | HighlightTags
