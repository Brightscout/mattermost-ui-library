import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {StyledSwitchContainerProps} from './Switch';

/**
 * Styled container to hold the Switch and label for component
 */
export const StyledSwitch = styled(Form.Check)<StyledSwitchContainerProps>(({fullWidth}) => ({
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: fullWidth ? '100%' : 280,

    // Style for switch labels
    '& .mm-switch_labels': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginRight: 16,

        // Style for label
        '& .mm-switch_label': {
            fontSize: 14,
            lineHeight: '20px',
            color: colors.centerChannel,
            overflowWrap: 'break-word',
        },

        // Style for sub-label
        '& .mm-switch_subLabel': {
            fontSize: 12,
            lineHeight: '16px',
            color: colors.centerChannel_72,
            overflowWrap: 'break-word',
        },
    },

    // Style for switch
    '& input.form-check-input': {
        cursor: 'pointer',
        padding: 0,
        margin: 0,
        height: 20,
        minWidth: 32,
        border: '2px solid transparent',
        borderRadius: 10,
        backgroundColor: colors.centerChannel_32,
        backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'4\' fill=\'%23fff\'/%3e%3c/svg%3e")',
        backgroundPosition: 'left center',

        '&:hover': {
            backgroundColor: colors.centerChannel_40,
        },

        '&:active': {
            backgroundColor: colors.centerChannel_48,
            filter: 'none',
        },

        '&:focus': {
            borderColor: colors.primary,
            boxShadow: 'none',
        },
    },

    // Style applied when Switch is disabled
    '& input.form-check-input:disabled': {
        borderColor: 'transparent',
        backgroundColor: colors.centerChannel_24,

        '& ~ .mm-switch_labels .form-check-label': {
            color: colors.centerChannel_40,
        },

        '&:checked': {
            opacity: '32%',
        },
    },

    // Style for switch when checked
    '& input.form-check-input:checked': {
        border: `2px solid ${colors.primary}`,
        backgroundColor: colors.primary,
        backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'4\' fill=\'%23fff\'/%3e%3c/svg%3e")',
        backgroundPosition: 'right center',

        '&:hover': {
            backgroundColor: colors.buttonPrimaryHover,
        },

        '&:active': {
            backgroundColor: colors.buttonPrimaryActive,
            filter: 'none',
        },

        '&:focus': {
            borderColor: colors.primary_32,
            boxShadow: 'none',
        },
    },

    // Style applied on error
    '& input.form-check-input.is-invalid': {
        borderColor: colors.error,

        '&:checked': {
            borderColor: 'transparent',
            backgroundColor: colors.error,
        },
    },
}));
