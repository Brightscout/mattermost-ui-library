import React from 'react';

import {Icon} from '@Components/Icon';

import {ButtonProps, ButtonIconSizeMap} from './Button';
import {StyledButtonContainer} from './Button.styles';

/**
 * Display the icon and text in button
 */
const DisplayContent = ({iconName, iconPosition, children, size = 'md'}: ButtonProps) => {
    const buttonIconSizeMap: ButtonIconSizeMap = {
        xs: 10,
        sm: 12,
        md: 16,
        lg: 20,
    };

    /**
     * If "iconName" is present then place the icon according to the given icon position and return children with the icon
     * else return children without an icon
     */
    if (iconName) {
        const icon = (
            <Icon
                name={iconName}
                size={buttonIconSizeMap[size]}
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
        size = 'md',
        width = 'fit-content',
        ...restProps
    } = props;

    return (
        <StyledButtonContainer
            iconPosition={iconPosition}
            variant={variant}
            className={`mm-button ${className}`}
            size={size}
            width={width}
            {...restProps}
        >
            <DisplayContent
                iconName={iconName}
                iconPosition={iconPosition}
                size={size}
            >
                {children}
            </DisplayContent>
        </StyledButtonContainer>
    );
};
