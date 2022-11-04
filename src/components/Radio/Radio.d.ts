/**
 * Radio's size types
 *
 * `sm` - radio size = 12, label size = 12
 *
 * `md` - radio size = 16, label size = 14
 *
 * `lg` - radio size = 20, label size = 16
 */
type RadioSizeTypes = 'sm' | 'md' |'lg';

export interface RadioProps {

    /**
     * If `true`, the radio will indicate error
     *
     * @default false
     */
    error?: boolean;

    /**
     * Radio sizes
     *
     * @default 'md'
     */
    size?: RadioSizeTypes;

    /**
     * Label for the radio
     */
    label: string;

    /**
     * Value for the radio
     */
    value: string;

    /**
     * If `true`, the radio component will be disabled
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * Id for radio
     */
    id?: string;

    /**
     * Name for radio
     */
    name: string;

    /**
     * Checked state for radio
     */
    checked?: boolean;

    /**
     * To override or extend the styles applied to the component
     */
    className?: string;

    /**
     * Handler called when the radio button is clicked
     */
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

    /**
     * Handler called when there is change in the selected value of radio button
     */
    onChange: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}
