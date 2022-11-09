import React from 'react';

import {extendClassname} from '@Utils';
import {Tooltip} from '@Components/Tooltip';

import {LabelTag, TagProps} from './Tag';
import {TagWrapper} from './Tag.styles';

/**
 * Tag Component
 *
 * @example correct usage
 * ```ts
 * <Tag
 *   text="TAG"
 *   type="label"
 *   variant="general"
 * />
 * ```
 *
 * @example usage with type shortcut
 * ```ts
 * <Tag text="TAG" type="shortcut" />
 * ```
 *
 * @example usage with type highlight
 * ```ts
 * <Tag text="TAG" type="highlight" />
 * ```
 */
export const Tag = (props: TagProps) => {
    const {type, text, tooltip = false} = props;

    const tagElement = (
        <TagWrapper
            className={`mm-tag ${extendClassname({
                [type]: true,
                ...(type === 'label' && {[(props as LabelTag).variant]: true}),
            })}`}
        >
            {text}
        </TagWrapper>
    );

    if (tooltip) {
        return (
            <Tooltip
                text={tooltip.text}
                placement={tooltip.placement}
            >
                {tagElement}
            </Tooltip>
        );
    }
    return tagElement;
};
