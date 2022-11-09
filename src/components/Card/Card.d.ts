import React from 'react';

export interface CardProps {

    /**
     * Content of the card
     */
    children?: React.ReactNode;

    /**
	 * To override or extend the styles applied to the component
	 */
    className?: string;
}
