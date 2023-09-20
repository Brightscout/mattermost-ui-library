import React from 'react';

import {Icon} from '@Components/Icon';

import colors from '@Styles/colorsForJs.module.scss';

import {Container, IconContainer, NoDataMessage} from './NoData.styles';
import {NoDataProps} from './NoData';

export const NoData = (props: NoDataProps) => {
    const {iconName, message, iconBgColor = colors.centerChannel_4, className = ''} = props;

    return (
        <Container className={`mm-noData ${className}`}>
            <IconContainer iconBgColor={iconBgColor}>
                <Icon
                    name={iconName}
                    size={32}
                />
            </IconContainer>
            <NoDataMessage>
                {message}
            </NoDataMessage>
        </Container>
    );
};
