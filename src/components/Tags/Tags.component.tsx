import React from 'react';

import {extendClassname} from '@Utils';

import {TagsProps} from './Tags';
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
    const {type, text} = props;

    return (
        <TagsWrapper
            className={`mm-tags ${extendClassname({[type]: true})}${type === 'label' ? extendClassname({[props.variant]: true}) : ''}`}
        >
            {text}
        </TagsWrapper>);
};
