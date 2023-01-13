import React from 'react';

import {Icon} from '@Components/Icon';

import {Container, IconContainer, NoDataMessage} from './NoData.styles';
import {NoDataProps} from './NoData';

export const NoData = (props: NoDataProps) => {
    const {iconName, message} = props;

    return (
        <Container>
            <IconContainer>
                <Icon
                    name={iconName}
                    size={32}
                    iconColor='#84878F'
                />
            </IconContainer>
            <NoDataMessage>
                {message}
            </NoDataMessage>
        </Container>
    );
};
