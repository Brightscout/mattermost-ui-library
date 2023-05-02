import styled from 'styled-components';
import {Modal} from 'react-bootstrap';

import Colors from '@Styles/colorsForJs.module.scss';

// Styles for dialog wrapper
export const DialogWrapper = styled(Modal)({
    '& .modal-dialog': {
        display: 'flex',
        alignItems: 'center',
        minHeight: 'calc(100% - 20px)',
    },

    '& .modal-content': {
        border: `1px solid ${Colors.centerChannel_8}`,
        borderRadius: '8px',
        width: '100%',
    },

    '@media (min-width: 576px)': {
        '& .modal-dialog': {
            margin: '30px auto',
            minHeight: 'calc(100% - 60px)',
            maxWidth: '500px',
        },
    },
});

// Styles for dialog header
export const DialogHeader = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '18px',
});

// Styles for dialog content
export const DialogContent = styled.div({
    padding: '0 18px',
    textAlign: 'center',
    color: Colors.centerChannel,
});

// Styles for dialog title
export const DialogTitle = styled.h2({
    fontWeight: 600,
    fontSize: '22px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginTop: 0,
});

// Styles for dialog description
export const DialogDescription = styled.p({});

// Styles for dialog actions
export const DialogActions = styled.div({
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',

    // If `destructive` is true, the primary button turns to error state
    '& .destructiveBtnPrimary': {
        backgroundColor: Colors.error,
        borderColor: Colors.error,
    },

    // If `destructive` is true, the secondary button turns to error state
    '& .destructiveBtnSecondary': {
        color: Colors.error,
        backgroundColor: Colors.error_8,
        borderColor: Colors.error,
    },
});

// Styles for dialog footer
export const DialogFooter = styled.div({
    padding: '18px',
});

// Styles for icon button
export const IconButton = styled.button({
    background: 'none',
    border: 'none',
});
