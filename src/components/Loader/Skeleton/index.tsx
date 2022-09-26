import React from 'react';

type SkeletonLoaderProps = {
    height?: number;
    width?: number;
    className?: string;
}

const SkeletonLoader = ({height, width, className = ''}: SkeletonLoaderProps) => (
    <div
        className={`skeleton-loader d-block ${className}`}
        style={{height, width}}
    />
);

export default SkeletonLoader;
