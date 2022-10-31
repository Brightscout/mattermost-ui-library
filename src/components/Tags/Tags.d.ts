// Variant Types for label
export type TagsVariantType = 'general' | 'info' | 'warning' | 'success';

export interface CommonProps {

    /**
     * Text to be rendered in the tag
     */
    text: string;
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
