import React, { forwardRef } from 'react';

import { Icon } from '@Components/Icon';
import { extendClassname } from '@Utils';

import { InputErrorMessage } from 'commonStyledComponents/InputErrorMessage/InputErrorMessage.styles';

import { InputProps } from './Input';
import {
	StyledInput,
	StyledFieldSet,
	StyledInputContainer,
	StyledIconButton,
} from './Input.styles';

/**
 * DisplayFieldSet - sub-component
 *
 * Displays fieldset for input component
 */
const DisplayFieldSet = ({ value, error, label }: InputProps) => (
	<StyledFieldSet
		className={`input_label ${extendClassname({
			'visible_label-border': Boolean(value),
			input_error: Boolean(error),
		})}`}
		error={Boolean(error)}
	>
		<legend className={extendClassname({ visible_label: Boolean(value) })}>
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
		label,
		iconName,
		className = '',
		fullWidth,
		onClose,
		searchQuery,
		onInputFocus,
		...restProps
	} = props;
	const { readOnly, error, required, value = '' } = restProps;

	const inputLabel = `${label}${required ? ' *' : ''}`;

	/**
	 * Toggle placeholder value on type change
	 * @param event - HTML input event
	 * @param type - focus, blur
	 */
	const togglePlaceholderValue = (
		event: React.ChangeEvent<HTMLInputElement>,
		type: string,
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
			>
				{iconName && <Icon
					name={iconName}
					size={16}
				/>}
				<StyledInput
					ref={ref}
					placeholder={inputLabel}
					onFocus={(event: React.ChangeEvent<HTMLInputElement>) => {
						if(onInputFocus){
							onInputFocus();
						}
						togglePlaceholderValue(event, 'focus');
					}}
					onBlur={(event: React.ChangeEvent<HTMLInputElement>) =>
						togglePlaceholderValue(event, 'blur')
					}
					{...restProps}
				/>
				{searchQuery && (
					<StyledIconButton onClick={onClose}>
						<Icon
							name='Close'
							size={12}
							iconColor='#ffffff'
						/>
					</StyledIconButton>
				)}
				<DisplayFieldSet
					value={value}
					label={inputLabel}
					error={error}
				/>
			</StyledInputContainer>
			{Boolean(error) && <InputErrorMessage>{error}</InputErrorMessage>}
		</div>
	);
});
