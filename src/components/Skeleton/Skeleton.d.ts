export interface StyledSkeletonProps {

    // size on the circular variant loader, the size if passed to width and height
    size?: string | number;

    // height of the rectangular variant loader
    height?: string | number;

    // width of the rectangular variant loader
    width?: string | number;

    // border radius of the rectangular variant loader
    borderRadius?: string | number;
}

export interface CircularSkeleton {

    /**
     * `circular` variant loader
     */
    variant: 'circular';

    /**
     * Size of the `circular` loader
     *
     * @default 100%
     */
    size?: number | string;
}

export interface RectangularSkeleton {

    /**
     * `rectangular` variant loader
     */
    variant: 'rectangular';

    /**
     * Width of the `rectangular` loader
     *
     * @default 100%
     */
    width?: number | string;

    /**
     * Height of the `rectangular` loader
     *
     * @default 100%
     */
    height?: number | string;

    /**
     * Border radius of the `rectangular` loader
     */
    borderRadius?: number | string;
}

export type SkeletonProps = CircularSkeleton | RectangularSkeleton;
