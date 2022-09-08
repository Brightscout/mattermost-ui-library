import React from 'react';

// TODO: To be removed, used for testing
type TypographyProps = {
    children: JSX.Element | string;
}

const Typography = ({children}: TypographyProps): JSX.Element => <p>{children}</p>;

export default Typography;
