import {Dropdown, DropdownButton as RBDropdownButton} from 'react-bootstrap';
import styled from 'styled-components';

import {Button} from '@Components/Button';

export const DropdownButton = styled(RBDropdownButton)({});

export const DropdownMenu = styled(Dropdown.Menu)({
    width: '100%',
});

export const DropdownItem = styled(Dropdown.Item)({});

export const StyledButton = styled(Button)({});
