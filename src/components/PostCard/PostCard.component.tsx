import React from 'react';

import {PostCardRightPanelWrapper, PostCardWrapper} from './PostCard.styles';
import {PostCardProps} from './PostCard';
import {PostHeader} from './subComponents/PostHeader';

/**
 * PostCard Component
 *
 * @example Correct usage
 * ```tsx
 * <PostCard
 *  avatarComponent={avatarComponent}
 *  floatingMenuComponents={[<button>Test</button>]}
 *  authorName={authorName}
 *  botBadgeComponent={botBadgeComponent}
 *  timeStampComponent={timeStampComponent}
 *  postMessage={postMessage}
 * />
 * ```
 */
export const PostCard = ({
    avatarComponent,
    floatingMenuComponents,
    authorName,
    botBadgeComponent,
    timeStampComponent,
    postMessage,
}: PostCardProps) => (
    <PostCardWrapper>
        {avatarComponent}
        <PostCardRightPanelWrapper>
            <PostHeader
                authorName={authorName}
                floatingMenuComponents={floatingMenuComponents}
                botBadgeComponent={botBadgeComponent}
                timeStampComponent={timeStampComponent}
            />
            <div>{postMessage}</div>
        </PostCardRightPanelWrapper>
    </PostCardWrapper>
);
