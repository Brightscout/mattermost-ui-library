import React, { forwardRef } from 'react';
import { FormControl, FormControlProps } from 'react-bootstrap';

import { Icon } from '@Components/Icon';
import { extendClassname } from '@Utils';

import { InputErrorMessage } from 'commonStyledComponents/InputErrorMessage/InputErrorMessage.styles';

import { InputProps } from './Input';
import {
	StyledInput,
	StyledFieldSet,
	StyledInputContainer,
	StyledIconButton,
	increaseInputSizeBy,
} from './Input.styles';

/**
 * DisplayFieldSet - sub-component
 *
 * Displays fieldset for input component
 */
const DisplayFieldSet = ({ value, error, label, borderLess }: InputProps) => (
	<StyledFieldSet
		className={`input_label ${extendClassname({
			'visible_label-border': Boolean(value),
			input_error: Boolean(error),
			input_borderless: Boolean(borderLess),
		})}`}
		error={!!error}
		borderLess={borderLess}
	>
		<legend
			className={extendClassname({ visible_label: Boolean(value && label) })}
		>
			{label}
		</legend>
	</StyledFieldSet>
);

/**
 * Input Component
 *
 * @example Correct usage
 * ```ts
 * <Input label='label'/>
 * ```
 *
 * @example Correct usage with icon
 * ```ts
 * <Input label='label' iconName='Globe'/>
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const {
		label = '',
		iconName,
		className = '',
		fullWidth,
		onClose,
		searchQuery,
		onInputFocus,
		disableResize = false,
		removeCloseButton = false,
		component = 'input',
		size = 'md',
		borderLess,
		disabled = false,
		...inputProps
	} = props;
	const { readOnly, error, required, value = '' } = inputProps;

	const inputLabel = `${label}${required ? ' *' : ''}`;

	/**
	 * Toggle placeholder value on type change
	 * @param event - HTML input event
	 * @param type - focus, blur
	 */
	const togglePlaceholderValue = (
		event: React.FocusEvent<FormControl & HTMLInputElement>,
		type: string
	) => {
		if (!readOnly) {
			event.target.placeholder = type === 'focus' ? '' : inputLabel;
		}
	};

	return (
		<div>
			<StyledInputContainer
				className={`mm-input ${className}`}
				fullWidth={fullWidth}
				size={size}
				disabled={disabled}
			>
				{iconName && (
					<Icon name={iconName} size={12 + 2 * increaseInputSizeBy[size]} />
				)}
				<StyledInput
					{...(!!ref && { inputRef: ref as FormControlProps['inputRef'] })}
					placeholder={inputLabel}
					onFocus={(event: React.FocusEvent<FormControl>) =>
						togglePlaceholderValue(
							event as React.FocusEvent<FormControl & HTMLInputElement>,
							'focus'
						)
					}
					onBlur={(event: React.FormEvent<FormControl>) =>
						togglePlaceholderValue(
							event as React.FocusEvent<FormControl & HTMLInputElement>,
							'blur'
						)
					}
					label={label}
					disabled={disabled}
					{...inputProps}
				/>
				{searchQuery && (
					<StyledIconButton onClick={onClose} className="clear-input-button">
						<Icon name="Close" size={8 + 2 * increaseInputSizeBy[size]} />
					</StyledIconButton>
				)}
				<DisplayFieldSet
					value={value}
					label={inputLabel}
					error={error}
					borderLess={borderLess}
				/>
			</StyledInputContainer>
			{Boolean(error) && <InputErrorMessage>{error}</InputErrorMessage>}
		</div>
	);
});

Input.displayName = 'Input';
