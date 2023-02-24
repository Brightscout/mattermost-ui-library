import React from 'react';

import {Icon} from '@Components/Icon';

import {ButtonProps} from './Button';
import {StyledButtonContainer} from './Button.styles';

/**
 * Display the icon and text in button
 */
const DisplayContent = ({iconName, iconPosition, children}: ButtonProps) => {
    /**
     * If "iconName" is present then place the icon according to the given icon position and return children with the icon
     * else return children without an icon
     */
    if (iconName) {
        const icon = (
            <Icon
                name={iconName}
                size={16}
            />
        );
        if (iconPosition === 'start') {
            return <>{icon}{children}</>;
        }

        return <>{children}{icon}</>;
    }

    return <>{children}</>;
};

/**
 * Button Component
 *
 * @example Correct usage
 *
 * ```ts
 * <Button>Button</Button>
 * ```
 *
 * @example Correct usage of Button with icon
 *
 * ```ts
 * <Button iconName="Delete">Button</Button>
 * ```
 */
export const Button = (props:ButtonProps) => {
    const {
        children,
        iconName,
        iconPosition = 'start',
        variant = 'primary',
        className = '',
        ...restProps
    } = props;

    return (
        <StyledButtonContainer
            iconPosition={iconPosition}
            variant={variant}
            className={`mm-button ${className}`}
            {...restProps}
        >
            <DisplayContent
                iconName={iconName}
                iconPosition={iconPosition}
            >
                {children}
            </DisplayContent>
        </StyledButtonContainer>
    );
};
