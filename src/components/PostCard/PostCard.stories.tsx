import React from 'react';
import {Story, Meta} from '@storybook/react';

import {PostCard} from './PostCard.component';
import {PostCardProps} from './PostCard';

export default {
    title: 'Component/PostCard',
    component: PostCard,
    parameters: {
        layout: 'centered',
    },
} as Meta<PostCardProps>;

const PostCardTemplate: Story<PostCardProps> = (args) => <PostCard {...args}/>;

export const Default = PostCardTemplate.bind({});
Default.args = {
    authorName: 'Bot',
    postMessage:
		'Praesent suscipit, quam ac sodales vehicula, dolor ante viverra eros, quis sodales magna felis a velit. Duis sit amet dui dolor. Aliquam id nulla hendrerit, imperdiet enim at, dictum massa. Nullam ultricies est ut metus ornare, id facilisis urna faucibus. Phasellus in lorem sit amet purus convallis feugiat. Sed rhoncus aliquam ex, vitae rhoncus tellus consectetur sed. Morbi sit amet scelerisque ex. Cras varius dignissim mauris a efficitur. Donec leo mauris, mattis eu aliquam a, laoreet vel nulla. ',
    floatingMenuComponents: [<button key='button1'>{'Testing'}</button>, <button key='button2'>{'Author'}</button>],
};
