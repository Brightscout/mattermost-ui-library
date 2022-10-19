/**
* Spinner size type
*
*  `xs` - Spinner of size 10 x 10
*
*  `sm` - Spinner of size 12 x 12
*
*  `md` - Spinner of size 16 x 16
*
*  `xl` - Spinner of size 28 x 28
*
*  `2xl` - Spinner of size 32 x 32
*/
type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
* type for size map
*/
type SizeMapType = Record<SizeType, number>;

/**
* Interface for spinner container
*/
export interface SpinnerContainerProps {

    /**
    * Overlay for the spinner component
    *
    * If `true`, a background overlay fills the parent container
    * and spinner is centered within the container
    *
    * @default false
    */
    overlay?: boolean;

    /**
    * Color of the spinner based on available options
    * @default var(--button-bg)
    */
    color?: string;
}

/**
* Interface for spinner component
*/
export interface SpinnerProps extends SpinnerContainerProps {

    /**
    * Size of the spinner
    *
    * @default 'md'
    */
    size?: SizeType;

    /**
    * To override or extend the styles applied to the component
    */
    className?: string;
}
