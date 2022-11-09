import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

// Styles for card wrapper
export const CardWrapper = styled.div(() => {
    return {
        border: `1px solid ${Colors.centerChannel_16}`,
        borderRadius: '4px',
        background: Colors.centerChannelBg,
        boxShadow: Colors.elevation1,
        padding: 16,
    };
});
