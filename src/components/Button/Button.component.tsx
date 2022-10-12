import React, {ReactNode} from 'react';

import {Icon, IconType} from '@Components/Icon';

import {ButtonProps, IconPositionType} from './Button';
import {StyledButtonContainer} from './Button.styles';

/**
 * Display the icon in button
 * @param name - name of icon
 * @param iconPosition - position of icon either start or end
 * @param children - children of the button
 * @returns {Object} - icon and children placed according to position
 */
const displayIcon = (name:IconType, iconPosition:IconPositionType, children:ReactNode) => {
    const icon = (<Icon
        name={name}
    />);
    return iconPosition === 'start' ? <>{icon}{children}</> : <>{children}{icon}</>;
};

/**
 * Button Component
 *
 * @example Correct usage with default size and color
 * ```ts
 * <Button>Button</Button>
 * ```
 *
 * @example Using custom Button with icon and default icon position
 * ```ts
 * <Button iconName="Delete">Button</Button>
 * ```
 */
export const Button = (props:ButtonProps) => {
    const {
        disabled,
        variant = 'primary',
        children,
        iconName,
        iconPosition = 'start',
        width = 'fit-content',
        fullWidth,
    } = props;

    const content = iconName ? displayIcon(iconName, iconPosition, children) : children;

    return (
        <StyledButtonContainer
            iconPosition={iconPosition}
            width={width}
            fullWidth={fullWidth}
            disabled={disabled}
            variant={variant}
        >{content}</StyledButtonContainer>
    );
};
