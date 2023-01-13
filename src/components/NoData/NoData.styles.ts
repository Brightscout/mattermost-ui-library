import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

export const Container = styled('div')(() => {
    return {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
    };
});

export const IconContainer = styled('div')(() => {
    return {
        minWidth: '120px',
        minHeight: '120px',
        borderRadius: '80px',
        backgroundColor: colors.nodataIconBackground,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
});

export const NoDataMessage = styled('p')(() => {
    return {
        lineHeight: '20px',
        color: colors.centerChannel,
        maxWidth: '219px',
    };
});
