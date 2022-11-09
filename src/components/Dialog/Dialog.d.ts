import React from 'react';

export interface CommonProps {

    /**
	 * Primary action button text
	 */
    primaryActionText?: string;

    /**
	 * Destructive state of the button,
	 * if `true` the button color changes into error state
	 */
    destructive?: boolean;

    /**
	 * State of the dialog,
	 * when `true`, the dialog shows
	 */
    show?: boolean;

    /**
	 * Callback function which is to be triggered onHide scenarios
	 */
    onCloseHandler: () => void;

    /**
	 * Callback function to be triggered on clicking the primary action button
	 */
    onSubmitHandler?: () => void;

    /**
	 * 'true' for a backdrop that triggers an "onHide" when clicked.
	 * 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
	 * 'false' to remove the backdrop
	 *
	 * @default 'static'
	 */
    backdrop?: 'static' | boolean;

    /**
	 * To override or extend the styles applied to the component
	 */
    className?: string;
}

/**
 * Interface for the dialog with title as the required prop
 */
export interface DialogWithTitleAndOptionalJsx extends CommonProps {

    /**
	 * Title of the dialog
	 */
    title: string;

    /**
	 * Description of the dialog
	 */
    description?: string;

    /**
	 * Custom JSX content as children
	 */
    children?: React.ReactNode;
}

/**
 * Interface for the dialog with JSX children as the required prop
 */
export interface DialogWithJsxAndOptionalTitle extends CommonProps {

    /**
	 * Custom JSX content as children
	 */
    children: React.ReactNode;

    /**
	 * Title of the dialog
	 */
    title?: string;

    /**
	 * Description of the dialog
	 */
    description?: string;
}

// Pass either JSX or title/description or both title/description and JSX
export type DialogProps =
	| DialogWithJsxAndOptionalTitle
	| DialogWithTitleAndOptionalJsx;
