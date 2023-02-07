import styled from 'styled-components';
import {TabProps, Tabs as BootstrapTabs} from 'react-bootstrap';

import colors from '@Styles/colorsForJs.module.scss';

export const StyledTabs = styled(BootstrapTabs).withConfig({
    shouldForwardProp: (prop) => prop !== 'stickyHeader' as keyof TabProps,
})<{stickyHeader: boolean}>(({stickyHeader}) => ({
    borderBottom: `2px solid ${colors.tabsHeaderBorder}`,
    marginBottom: '24px',
    ...(stickyHeader && {
        position: stickyHeader ? 'sticky' : 'initial',
        top: 0,
        background: colors.white,
    }),

    '& .nav-link': {
        marginBottom: '-2px',
        lineHeight: '20px',
        fontWeight: '500',
        color: colors.centerChannel,

        '&:hover,:focus': {
            borderColor: 'transparent',
        },

        '&.active': {
            backgroundColor: 'transparent',
            color: colors.centerChannel,
            borderColor: 'transparent',
            borderBottom: `2px solid ${colors.primary}`,
        },
    },
})) as typeof BootstrapTabs;
