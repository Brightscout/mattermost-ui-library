import React from 'react';

// pass either jsx or title/description or either both title/description and jsx

export interface CommonProps {

    /**
     * Primary action button text
     */
    primaryActionText?: string;

    /**
       * Destructive state of button,
       * if `true` button color changes into error state
       */
    destructive?: boolean;

    /**
       * State of the dialog,
       * when `true`, dialog shows
       */
    show?: boolean;

    /**
       * Callback function which is to be triggered onHide scenarios
       */
    onCloseHandler: ()=>void;

    /**
       * Callback function to be triggered on clicking the primary action button
       */
    onSubmitHandler?: ()=>void;

    /**
       * 'true' for a backdrop that triggers an "onHide" when clicked.
       * 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
       * 'false' to remove backdrop
       *
       * @default 'static'
       */
    backdrop?: 'static' | boolean;

    /**
       * To override or extend the styles applied to the component
       */
    className?: string;
}

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
     * Custom Jsx content
     */
    children?: React.ReactNode;
}

export interface DialogWithJsxAndOptionalTitle extends CommonProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export type DialogProps = DialogWithJsxAndOptionalTitle | DialogWithTitleAndOptionalJsx
