/**
 * Checkbox's size types
 *
 * `sm` - checkbox size = 12
 *
 * `md` - checkbox size = 16
 *
 * `lg` - checkbox size = 20
 */
type CheckboxSizeTypes = 'sm' | 'md' | 'lg';

/**
 * Interface for CheckBox Component
 */
export interface CheckBoxProps extends StyledCheckBoxProps{

    /**
     * A unique id for checkbox
     */
    id?: string;

    /**
     * The name for the checkbox
     */
    name?: string;

    /**
     * The value associated with the checkbox
     */
    value?: string;

    /**
     * The label for the checkbox
     */
    label: string;

    /**
     * The size of the checkbox
     */
    size?: CheckboxSizeTypes;

    /**
     * If `true`, checkbox is disabled
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * if `true`, checkbox is checked
     *
     * @default false
     */
    checked?: boolean;

    /**
     * if `true`, checkbox is in error state
     *
     * @default false
     */
    error?: boolean;

    /**
     * To override or extend the styles applied to the component
     */
    className?: string;

    /**
     * Handler that's called when there is a change in the value of the checkbox
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
