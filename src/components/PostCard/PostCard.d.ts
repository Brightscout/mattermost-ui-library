import {ReactNode} from 'react';

import type {PostHeaderProps} from './subComponents/PostHeader';

export type PostCardProps = {

    /**
	 * Avatar component from mattermost.
	 */
    avatarComponent: ReactNode;

    /**
	 * Message or mattermost rendered component to be rendered in the post card.
	 */
    postMessage: string | ReactNode;
} & PostHeaderProps;
