import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

// Styles for the modal header wrapper
export const ModalHeaderWrapper = styled.div({
    padding: '26px  32px',
    borderBottom: `1px solid ${Colors.centerChannel_16}`,
});

// Styles for the modal's first row containing the header, the title and the close icon button
export const ModalHeaderRow = styled.div({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
});

// Styles for the modal title
export const ModalHeaderTitle = styled.h2({
    margin: 0,
    flex: 1,
    color: Colors.centerChannel,
    fontSize: '22px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
});

// Styles for the modal subtitle
export const ModalHeaderSubtitle = styled.p({
    margin: 0,
    color: Colors.centerChannel_72,
    fontSize: '12px',
    maxWidth: '80%',
});

// Styles for the icon button
export const IconButton = styled.button({
    background: 'none',
    border: 'none',
});