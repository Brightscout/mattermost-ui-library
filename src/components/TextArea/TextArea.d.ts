export interface TextAreaProps {

    /**
	 * value of textarea
	 */
    value: string | number;

    /**
	 * number of rows for textarea
	 *
	 * @default 3
	 */
    rows?: number;

    /**
	 * If `true`, the textarea will indicate error
	 */
    error?: boolean;

    /**
    * If `true`, the textarea element will be disabled
    *
    * @default false
    */
    disabled?: boolean;

    /**
	 * If `true`, the textarea element will be readonly
	 *
	 * @default false
	 */
    readOnly?: boolean;

    /**
    * Label for the text area
    */
    label: string;

    /**
    * A unique id given to the textarea element
    */
    id?: string;

    /**
    * The name applied to the textarea element
    */
    name?: string;

    /**
	* If `true`, value in textarea is required
	*
	* @default false
	*/
    required?: boolean;

    /**
	* If `true`, the textarea element is focused during the first mount
	*
	* @default false
	*/
    autoFocus?: boolean;

    /**
     * To override or extend the styles applied to the component
     */
    className?: string;

    /**
	 * Handler called when there is a change in the value of the textarea
	 */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
