import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

// Styles for tag wrapper
export const TagsWrapper = styled.div(() => {
    return {
        color: Colors.centerChannel,
        fontWeight: 600,
        borderRadius: '4px',
        padding: '0 4px',
        fontSize: '10px',
        width: 'fit-content',

        '&.label.general': {
            backgroundColor: Colors.centerChannel_8,
        },

        '&.label.info': {
            backgroundColor: Colors.buttonFocusBorder,
            color: Colors.primaryText,
        },

        '&.label.warning': {
            backgroundColor: Colors.error,
            color: Colors.primaryText,
        },

        '&.label.success': {
            backgroundColor: Colors.success,
            color: Colors.primaryText,
        },

        '&.shortcut': {
            backgroundColor: Colors.centerChannel_8,
            color: Colors.centerChannel_72,
        },

        '&.highlight': {
            fontWeight: 400,
            backgroundColor: Colors.mentionHighlightBg,
            color: Colors.mentionHighlightLink,
        },
    };
});
