import styled from 'styled-components';
import {Form} from 'react-bootstrap';

import colors from '@Styles/colorsForJs.module.scss';

/**
 * Styled container to hold the checkbox and label for component
 */
export const StyledCheckbox = styled(Form.Check)({
    display: 'inline-flex',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    minHeight: 'fit-content',

    // Style for checkbox
    '& input.form-check-input': {
        cursor: 'pointer',
        width: 16,
        height: 16,
        padding: '2px 0',
        margin: 0,
        borderRadius: 4,
        border: `1px solid ${colors.centerChannel_24}`,
        background: colors.centerChannelBg,
        position: 'relative',
        appearance: 'none',

        '&:hover': {
            borderColor: colors.centerChannel_40,
        },

        '&:active': {
            borderColor: colors.centerChannel_48,
            filter: 'none',
        },

        '&:focus': {
            borderColor: colors.primary,
            boxShadow: 'none',
        },
    },

    // Style for checkbox label
    '& label.form-check-label': {
        fontSize: 14,
        lineHeight: '16px',
        marginLeft: 10,
        color: colors.centerChannel,
    },

    // Style applied when checkbox is checked
    '& input.form-check-input:checked': {
        border: 'none',
        backgroundColor: colors.primary,
        backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-width=\'2\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',

        '&:hover': {
            backgroundColor: colors.buttonPrimaryHover,
        },

        '&:active': {
            backgroundColor: colors.buttonPrimaryActive,
        },
    },

    // Style applied when checkbox is disabled
    '& input.form-check-input:disabled': {
        borderColor: colors.centerChannel_24,

        '& ~ .form-check-label': {
            color: colors.centerChannel_40,
        },

        '&:checked': {
            opacity: '32%',
        },
    },

    // Style applied on error
    '& input.form-check-input.is-invalid': {
        borderColor: colors.error,

        '& ~ .form-check-label': {
            color: colors.centerChannel,
        },

        '&:checked': {
            backgroundColor: colors.error,
        },
    },
});
