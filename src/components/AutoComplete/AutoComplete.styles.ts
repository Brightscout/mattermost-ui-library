import styled from 'styled-components';

// Style for Autocomplete Container
export const AutoCompleteWrapper = styled.div<{fullWidth?: boolean}>(({fullWidth}) => ({
    width: fullWidth ? 'auto' : 'fit-content',
    position: 'relative',

    '.form-control': {
        boxShadow: 'none',
    },
    legend: {
        borderBottom: 'none',
    },
}));
