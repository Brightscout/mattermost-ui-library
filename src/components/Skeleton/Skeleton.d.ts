export interface StyledSkeletonProps {

    /**
	 * Size on the circular variant loader, the size is passed to width and height
	 */
    size?: string | number;

    /**
	 * Height of the rectangular variant loader
	 */
    height?: string | number;

    /**
	 * Width of the rectangular variant loader
	 */
    width?: string | number;

    /**
	 * Border radius of the rectangular variant loader
	 */
    borderRadius?: string | number;
}

export interface CircularSkeleton {

    /**
	 * `Circular` variant loader
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
