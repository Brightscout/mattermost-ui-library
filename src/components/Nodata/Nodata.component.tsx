import React from 'react';

import {Icon} from '@Components/Icon';

import {Container, IconContainer, NodataMessage} from './Nodata.styles';
import {NodataProps} from './Nodata';

export const Nodata = (props: NodataProps) => {
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
            <NodataMessage>
                {message}
            </NodataMessage>
        </Container>
    );
};
