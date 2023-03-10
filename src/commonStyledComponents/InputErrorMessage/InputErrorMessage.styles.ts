import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

// error message component for input and text field
export const InputErrorMessage = styled.p({
    color: Colors.error,
    fontSize: 12,
    margin: 1,
    wordBreak: 'break-all',
});
