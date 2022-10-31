import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

// Styles for modal header wrapper
export const ModalHeaderWrapper = styled.div({

    padding: '26px  32px',
    borderBottom: `1px solid ${Colors.centerChannel_16}`,
});

// Styles for modal first row containing header title and close icon button
export const ModalHeaderRow = styled.div({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
});

// Styles for modal title
export const ModalHeaderTitle = styled.h2({
    margin: 0,
    flex: 1,
    color: Colors.centerChannel,
    fontSize: '22px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
});

// Styles for modal subtitle
export const ModalHeaderSubtitle = styled.p({
    margin: 0,
    color: Colors.centerChannel_72,
    fontSize: '12px',
    maxWidth: '80%',
});

// Styles for icon button
export const IconButton = styled.button({
    background: 'none',
    border: 'none',
});