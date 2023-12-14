export interface ModalFooterProps {

    /**
	 * Callback for the close button
	 */
    onFooterCloseHandler: () => void;

    /**
	 * Callback for the primary button
	 */
    onSubmitHandler: () => void;

    /**
	 * Text for the primary button
	 *
	 * @default `Submit`
	 */
    primaryActionText?: string;

    /**
	 * Text for the secondary button in the modal footer
	 *
	 * @default `Close`
	 */
    secondaryActionText?: string;

	/**
	 * Determines if the primary action button on the modal should be enabled/disabled.
	 *
	 * @default false
	 */
	isPrimaryButtonDisabled?: boolean;
}
