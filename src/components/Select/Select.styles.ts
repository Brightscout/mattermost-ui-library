import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

import {InputProps} from './Select';

export const SelectWrapper = styled.div({
    position: 'relative',
});

export const TextField = styled.div({
    position: 'relative',
});

// Styles for label
export const Label = styled.label<InputProps>(({leadingIcon}) => {
    return {
        ...(leadingIcon ? {left: '24px', margin: '0 8px'} : {left: '12px'}),
        padding: '0 4px',
        position: 'absolute',
        color: Colors.centerChannel_64,
        fontSize: '14px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'white',
        transitionDuration: '0.1s',
        pointerEvents: 'none',
    };
});

// Styles for input
export const Input = styled.input<InputProps>(({leadingIcon}) => {
    return {
        ...(leadingIcon ? {padding: '10px 36px'} : {padding: '10px 32px 10px 16px'}),
        width: '100%',
        fontSize: '14px',
        color: Colors.centerChannel,
        border: `1px solid ${Colors.centerChannel_16}`,
        borderRadius: '4px',
        cursor: 'pointer',

        '&:focus': {
            outline: `2px solid ${Colors.primary}`,
        },

        '&:focus + label': {
            color: Colors.primary,
        },

        '&:focus + label , &:not(:placeholder-shown) + label': {
            top: 0,
            left: '10px',
            fontSize: '10px',
        },

    };
});

// Styles for leading icon
export const LeadingIcon = styled.div({
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '16px',
    transform: 'translateY(-50%)',
});

// styles for trailing icon
export const TrailingIcon = styled.div({
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    right: '16px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',

    '& .mm-icon': {
        pointerEvents: 'none',
    },
});

// Styles for dropdown options
export const Options = styled.ul<{open: boolean}>(({open}) => {
    return {
        listStyle: 'none',
        padding: '2px',
        display: open ? 'block' : 'none',
        margin: '10px 0',
        border: `1px solid ${Colors.centerChannel_16}`,
        borderRadius: '4px',
        boxShadow: Colors.elevation2,
        maxHeight: '300px',
        overflowY: 'auto',
    };
});

