import React from 'react';

import {PostHeaderProps} from './PostHeader';
import {
    PostFloatingMenu,
    PostHeaderAuthorName,
    PostHeaderWrapper,
} from './PostHeader.styles';

/**
 * PostHeader component.
 *
 * @example Correct usage
 * ```tsx
 * <PostHeader
 *  authorName={authorName}
 *  botBadgeComponent={botBadgeComponent}
 *  floatingMenuComponents={floatingMenuComponents}
 * />
 * ```
 */
export const PostHeader = ({
    authorName,
    botBadgeComponent,
    timeStampComponent,
    floatingMenuComponents,
}: PostHeaderProps) => (
    <PostHeaderWrapper>
        <PostHeaderAuthorName>{authorName}</PostHeaderAuthorName>
        {botBadgeComponent}
        {timeStampComponent}
        {floatingMenuComponents && (
            <PostFloatingMenu className='post__floating-menu'>
                {floatingMenuComponents}
            </PostFloatingMenu>
        )}
    </PostHeaderWrapper>
);
