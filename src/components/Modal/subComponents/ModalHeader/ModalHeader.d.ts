export interface ModalHeaderProps {

    /**
     * Main title of the header
     */
    title: string;

    /**
     * Subtitle of the header
     */
    subtitle?: string;

    /**
     * Callback to be triggered on clicking the close icon button
     */
    onHeaderCloseHandler: () => void;
}
