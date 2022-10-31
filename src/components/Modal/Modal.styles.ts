import styled from 'styled-components';
import {Modal} from 'react-bootstrap';

import Colors from '@Styles/colorsForJs.module.scss';

// Styles for modal wrapper
export const ModalWrapper = styled(Modal)({

    '& .modal-content': {
        border: `1px solid ${Colors.centerChannel_8}`,
        borderRadius: '8px',
    },
});

// Styles for modal body wrapper
export const ModalBody = styled.div({
    padding: '28px  32px',
    fontSize: '14px',
    maxHeight: '300px',
    overflowY: 'auto',

    '&::-webkit-scrollbar': {
        width: '4px',
    },

    '&::-webkit-scrollbar-track': {
        boxShadow: Colors.elevation1,
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: Colors.centerChannel_32,
        borderRadius: '4px',
    },
});