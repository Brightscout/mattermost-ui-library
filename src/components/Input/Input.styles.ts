import styled from 'styled-components';
import { Button, FormControl } from 'react-bootstrap';

import colors from '@Styles/colorsForJs.module.scss';

import { InputProps, InputSizeTypes, StyledInputContainerProp } from './Input';

// Input size map
export const increaseInputSizeBy = {
	sm: 0,
	md: 2,
	lg: 4,
};

// Style for Input Fieldset
export const StyledFieldSet = styled.fieldset<{
	error?: boolean;
	borderLess?: boolean;
}>(({ error = false, borderLess = false }) => {
	return {
		border: `1px solid ${error ? colors.error : colors.centerChannel_16}`,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		margin: 0,
		top: -6,
		borderRadius: '4px',
		pointerEvents: 'none',

		...(borderLess && {
			border: '1px solid transparent',
		}),

		// Style for fieldset legend
		'& legend': {
			float: 'unset',
			width: 'auto',
			overflow: 'hidden',
			display: 'block',
			padding: 0,
			fontSize: 10,
			lineHeight: '12px',
			color: `${error ? colors.error : colors.centerChannel_64}`,
			visibility: 'hidden',
			maxWidth: 0.01,
			transition: 'max-width 50ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
			whiteSpace: 'nowrap',
			borderBottom: 'none',
		},

		// Style for fieldset on hover
		'.mm-input input:hover + &': {
			borderColor: colors.centerChannel_48,

			'&.input_error': {
				borderColor: colors.error,
			},

			'&.input_borderless': {
				borderColor: 'transparent',
				backgroundColor: error ? colors.error_4 : colors.centerChannel_4,
			},
		},

		// Style for fieldset on active
		'.mm-input input:active + &': {
			borderColor: colors.primary,
			backgroundColor: colors.primary_4,

			'&.input_error': {
				borderColor: colors.error,
				background: 'none',
			},

			'&.input_borderless': {
				borderColor: 'transparent',
				backgroundColor: error ? colors.error_4 : colors.primary_4,
			},
		},

		// Style for fieldset on focus
		'.mm-input input:focus + &': {
			borderWidth: 2,
			borderColor: colors.primary,

			// Style for fieldset legend on focus
			'& legend': {
				color: colors.primary,
			},

			'&.input_error': {
				borderColor: colors.error,
				'& legend': {
					color: colors.error,
				},
			},

			'&.input_borderless': {
				borderColor: 'transparent',
				backgroundColor: error ? colors.error_8 : colors.primary_8,
			},
		},

		// Style for legend on focus
		'.mm-input input:focus + & legend, .visible_label': {
			paddingInline: 4,
			visibility: borderLess ? 'hidden' : 'visible',
			maxWidth: '100%',
			marginLeft: 10,
			transition: 'max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms',
		},

		// Style for fieldset on input disable
		'.mm-input input:disabled + &, .mm-input input.form-control[readonly] + &':
			{
				background: colors.centerChannel_4,
				border: `1px solid ${colors.centerChannel_48}`,

				'& .visible_label': {
					paddingInline: 4,
					color: colors.centerChannel_64,
					visibility: borderLess ? 'hidden' : 'visible',
					maxWidth: '100%',
					transition: 'max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms',
				},
			},
	};
});

// Style for Input Container
export const StyledInputContainer = styled.div<StyledInputContainerProp>(({ fullWidth, size = 'md', disabled = false }) => ({
	position: 'relative',
	width: fullWidth ? 'auto' : 'fit-content',
	display: 'flex',
	alignItems: 'center',
	paddingInline: '12px',
	height: 32 + 4 * increaseInputSizeBy[size],
	backgroundColor: disabled ? colors.centerChannel_4 : colors.centerChannelBg,

	'.clear-input-button': {
		height: 12 + 2 * increaseInputSizeBy[size],
		width: 12 + 2 * increaseInputSizeBy[size],
	},

	// Style for icon in input component
	'& > .mm-icon': {
		'& svg path': {
			color: colors.centerChannel_64,
		},
	},
}));

// Style for Input Component
export const StyledInput = styled(FormControl).withConfig({
	shouldForwardProp: (prop) => prop.toString() !== 'error',
})<InputProps>(({ error, size = 'md' }) => ({
	display: 'block',
	fontSize: 12 + increaseInputSizeBy[size as InputSizeTypes],
	padding: `${8 + increaseInputSizeBy[size as InputSizeTypes]}px 8px`,
	width: '100%',
	fontWeight: 400,
	lineHeight: `${16 + 2 * increaseInputSizeBy[size as InputSizeTypes]}`,
	color: `${error ? colors.error : colors.centerChannel}`,
	border: 'none',
	appearance: 'none',
	transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
	boxShadow: 'none',
	height: 'inherit',

	// Style for input on focus-visible
	'&:focus-visible': {
		outline: 0,
	},

	// Style for input on disable
	'&:disabled': {
		background: 'transparent !important',
	},

	// Style for input on focus
	'&:focus': {
		color: 'inherit',
		background: 'inherit',
		border: 'none',
		outline: 0,
		boxShadow: 'none',
	},

	// Style for input on read-only
	'&.form-control[readonly]': {
		background: colors.centerChannelBg,
	},

	// Styles for placeholder in error state
	'::placeholder': {
		color: error ? colors.error : colors.centerChannel_64,
	},
})) as React.FC<InputProps>;

// Style for close icon button
export const StyledIconButton = styled(Button)({
	borderRadius: '50%',
	padding: 0,
	borderWidth: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: colors.centerChannel_48,
	position: 'absolute',
	right: '12px',


	'&.btn': {
		'&:hover, &:active, &:focus': {
			background: colors.centerChannel_64,
			outline: 'none'
		},
	},

	'.mm-icon': {
		'& path, & rect': {
			color: colors.white,
			strokeOpacity: 'unset',
		},
	},
});
