import React, {useState} from 'react';

import {Dropdown as RbDropdown} from 'react-bootstrap';

import {MenuItem} from '@Components/MenuItem';

import {DropdownProps} from './Dropdown';
import {StyledButton} from './Dropdown.styles';

/**
 *
 *
 *
 *
 * WIP
 *
 * Styling dropdown button
 *
 * creating function for passing the selected value to the user
 *
 * onClicking the value it should the dropdown should close
 *
 * Refactoring code , remove unused props from d.ts
 *
 *
 *
 *
 *
 *
 */

// For Rendering Custom Toggle
interface CustomToggleProps {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

// Visible dropdown button
const CustomToggle = React.forwardRef(
    (props: CustomToggleProps, ref: React.Ref<HTMLButtonElement>) => (
        <StyledButton
            ref={ref}
            onClick={props.onClick}
        >
            {props.children}
        </StyledButton>
    ),
);

interface CustomMenuProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    labeledBy?: string;
}

// Customizing dropdown Menu
const CustomMenu = React.forwardRef(
    (props: CustomMenuProps, ref: React.Ref<HTMLDivElement>) => {
        return (
            <div
                ref={ref}
                style={props.style}
                className={props.className}
                aria-labelledby={props.labeledBy}
            >
                <ul className='list-unstyled'>{props.children}</ul>
            </div>
        );
    },
);

export const Dropdown = (props: DropdownProps) => {
    const {options} = props;

    const onMenuItemSelectHandler = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    ) => {
        const selectedSpan = e.target as HTMLSpanElement;
        setActive(selectedSpan.textContent);
    };
    const [active, setActive] = useState<string | null>('');

    return (
        <RbDropdown>
            <RbDropdown.Toggle as={CustomToggle}>
                {'Dropdown Button'}
            </RbDropdown.Toggle>
            <RbDropdown.Menu as={CustomMenu}>
                {options.map((option) => {
                    return (
                        <MenuItem
                            key={option.label}
                            onClick={onMenuItemSelectHandler}
                            label={option.label}
                            className={active === option.label ? 'active' : ''}
                        />
                    );
                })}
            </RbDropdown.Menu>
        </RbDropdown>
    );
};
