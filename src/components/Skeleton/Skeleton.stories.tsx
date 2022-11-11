import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Skeleton} from './Skeleton.component';
import {SkeletonProps} from './Skeleton';

export default {
    title: 'Component/Skeleton',
    component: Skeleton,
} as Meta<SkeletonProps>;

const SkeletonTemplate:Story<SkeletonProps> = (args) => <Skeleton {...args}/>;

// Circular skeleton
export const CircularSkeleton = SkeletonTemplate.bind({});
CircularSkeleton.args = {
    variant: 'circular',
    size: 100,
};

// Rectangular skeleton
export const RectangularSkeleton = SkeletonTemplate.bind({});
RectangularSkeleton.args = {
    variant: 'rectangular',
    height: 50,
    width: 100,
};

// Rectangular skeleton with border radius
export const RectangularSkeletonWithBorderRadius = SkeletonTemplate.bind({});
RectangularSkeletonWithBorderRadius.args = {
    variant: 'rectangular',
    height: 50,
    width: 100,
    borderRadius: 4,
};

// Passing dimensions as string
export const DimensionsAsString = SkeletonTemplate.bind({});
DimensionsAsString.args = {
    variant: 'rectangular',
    height: '50vh',
    width: '50vh',
    borderRadius: 4,
};
