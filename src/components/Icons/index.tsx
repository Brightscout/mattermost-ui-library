import React from 'react';

import SVGWrapper from '@Components/SvgWrapper';

import SVGIcons from '@Constants/icons';

type IconProps = {
    className?: string;
}

type IconParamsType = {
    width: number,
    height: number,
    viewBox: string,
    className: string,
}

const getIconParams = (size: number, className: string): IconParamsType => ({
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    className,
});

export const ServiceNowIcon = ({className = ''}: IconProps): JSX.Element => (
    <SVGWrapper
        {...getIconParams(16, `icon-text-color--fill ${className}`)}
        viewBox='0 0 28 26'
    >
        {SVGIcons.servicenow}
    </SVGWrapper>
);

export const BellIcon = ({className = ''}: IconProps): JSX.Element => (
    <SVGWrapper {...getIconParams(48, `icon-text-color--fill rhs-state-icon ${className}`)}>
        {SVGIcons.bell}
    </SVGWrapper>
);

export const UnlinkIcon = ({className = ''}: IconProps): JSX.Element => (
    <SVGWrapper {...getIconParams(48, `icon-text-color--fill rhs-state-icon ${className}`)}>
        {SVGIcons.unlink}
    </SVGWrapper>
);

export const LinkIcon = ({className = ''}: IconProps): JSX.Element => (
    <SVGWrapper {...getIconParams(16, `icon-text-color--fill ${className}`)}>
        {SVGIcons.link}
    </SVGWrapper>
);

export const EditIcon = ({className = ''}: IconProps): JSX.Element => (
    <SVGWrapper {...getIconParams(16, `icon-text-color--stroke ${className}`)}>
        {SVGIcons.edit}
    </SVGWrapper>
);

export const DeleteIcon = ({className = ''}: IconProps): JSX.Element => (
    <SVGWrapper {...getIconParams(16, `icon-text-color--stroke ${className}`)}>
        {SVGIcons.delete}
    </SVGWrapper>
);

export const CheckIcon = ({className = ''}: IconProps): JSX.Element => (
    <SVGWrapper {...getIconParams(38, className)}>
        {SVGIcons.check}
    </SVGWrapper>
);

export const UserIcon = ({className = ''}: IconProps): JSX.Element => (
    <SVGWrapper {...getIconParams(16, `icon-text-color--fill ${className}`)}>
        {SVGIcons.user}
    </SVGWrapper>
);
