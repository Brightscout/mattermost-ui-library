import {MenuItemProps} from '@Components/MenuItem/MenuItem';

export interface DropdownProps {
    test?: string;
    className?: string;
    children?: React.ReactNode;
    options: MenuItemProps[];
}
