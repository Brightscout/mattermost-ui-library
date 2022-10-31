import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

export const ModalFooterWrapper = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '8px',
    padding: '24px 32px',
    borderTop: `1px solid ${Colors.centerChannel_16}`,
});