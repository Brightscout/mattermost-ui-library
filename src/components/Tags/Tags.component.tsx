import React from 'react';

import {extendClassname} from '@Utils';

import {Tooltip} from '@Components/Tooltip';

import {LabelTags, TagsProps} from './Tags';
import {TagsWrapper} from './Tags.styles';

/**
 * Tags Component
 *
 * @example correct usage
 * ```ts
 * <Tags
 *   text="TAG"
 *   type="label"
 *   variant="general"
 * />
 * ```
 *
 * @example usage with type shortcut
 * ```ts
 * <Tags text="TAG" type="shortcut" />
 * ```
 * @example usage with type highlight
 * ```ts
 * <Tags text="TAG" with type="highlight" />
 * ```
 */
export const Tags = (props: TagsProps) => {
    const {type, text, tooltip = false} = props;

    if (tooltip) {
        return (
            <Tooltip
                text={tooltip.text}
                placement={tooltip.placement}
            >
                <TagsWrapper
                    className={`mm-tags ${extendClassname({[type]: true, ...(type === 'label' ? {[(props as LabelTags).variant]: true} : {})})}`}
                >
                    {text}
                </TagsWrapper>
            </Tooltip>);
    }

    return (
        <TagsWrapper
            className={`mm-tags ${extendClassname({[type]: true, ...(type === 'label' ? {[(props as LabelTags).variant]: true} : {})})}`}
        >
            {text}
        </TagsWrapper>);
};
