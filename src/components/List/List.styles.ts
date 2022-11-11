import styled from 'styled-components';

import colors from '@Styles/colorsForJs.module.scss';

// Styles for options list
export const Options = styled.ul<{open: boolean}>(({open}) => {
    return {
        position: 'absolute',
        width: '100%',
        left: 0,
        background: 'white',
        top: 44,
        zIndex: 99,
        listStyle: 'none',
        padding: '2px',
        display: open ? 'block' : 'none',
        margin: 0,
        border: `1px solid ${colors.centerChannel_16}`,
        borderRadius: '4px',
        boxShadow: colors.elevation2,
        maxHeight: '300px',
        overflowY: 'auto',

        // Color of the selected trailing check mark is set to the primary color
        '& .mm-menuItem.select__option-active': {
            '.mm-icon:last-child svg path': {
                color: colors.primary,
            },
        },
        
    };
});
