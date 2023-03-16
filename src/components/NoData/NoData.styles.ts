import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

import {IconContainerProps} from './NoData';

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

export const IconContainer = styled.div<IconContainerProps>(({iconBgColor}) => {
    return {
        minWidth: '120px',
        minHeight: '120px',
        borderRadius: '80px',
        backgroundColor: iconBgColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .mm-icon': {
            '& path , & rect': {
                color: colors.noDataIcon,
            },
        },
    };
});

export const NoDataMessage = styled.p({
    textAlign: 'center',
    wordWrap: 'break-word',
    lineHeight: '20px',
    fontSize: '16px',
    color: colors.centerChannel,
    maxWidth: '219px',
});
