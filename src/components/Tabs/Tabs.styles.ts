import styled from 'styled-components';
import {TabProps as BootstrapTabProps, Tabs} from 'react-bootstrap';

import colors from '@Styles/colorsForJs.module.scss';

export const StyledTabs = styled(Tabs).withConfig({
    shouldForwardProp: (prop) => prop !== 'stickyHeader' as keyof BootstrapTabProps,
})<{stickyHeader: boolean}>(({stickyHeader}) => ({

    '.nav-tabs.nav-justified > li > a': {
        marginBottom: 0,
        borderColor: 'transparent',
    },

    '& .nav-tabs': {
        borderBottom: `2px solid ${colors.tabsHeaderBorder}`,
        marginBottom: '24px',

        ...(stickyHeader && {
            position: stickyHeader ? 'sticky' : 'initial',
            top: 0,
            background: colors.centerChannelBg,
        }),
    },

    '& .nav-item': {
        marginBottom: '-2px',
        lineHeight: '20px',
        fontWeight: '500',
        backgroundColor: 'transparent',

        a: {
            color: colors.centerChannel,

            ':hover, :focus': {
                color: colors.primary,
                backgroundColor: 'transparent',
                borderColor: 'transparent',
            },
        },

        '&.active': {
            borderBottom: `2px solid ${colors.primary}`,

            a: {
                color: colors.centerChannel,
                borderColor: 'transparent',

                ':hover, :focus': {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                },
            },
        },
    },
}));
