import {ReactNode} from 'react';

import {PostHeaderProps} from './subComponents/PostHeader/PostHeader';

export type PostCardProps = {

    /**
	 * Avatar component from mattermost.
	 */
    avatarComponent: ReactNode;

    /**
	 * Message or mattermost rendered component to be rendered in the post card.
	 */
    postMessage: string | ReactNode;
} & Pick<
PostHeaderProps,
| 'floatingMenuComponents'
| 'authorName'
| 'botBadgeComponent'
| 'timeStampComponent'
>;
