import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

// Mock data
import {cardBody, EditIcon, DeleteIcon, cardProps} from '@Constants/mockData/card';

import Card from '.';

describe('Card', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<Card {...cardProps}/>);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(cardProps.className)).toBeTruthy();
    });

    it('Should render the header correctly', () => {
        expect(component.find('.details-card__header-text').text().includes(cardProps.cardHeader)).toBeTruthy();
    });

    it('Should render the sub-header correctly', () => {
        expect(component.find('.details-card__sub-header').text().includes(cardProps.cardSubHeader)).toBeTruthy();
    });

    it('Should render the card body correctly', () => {
        expect(component.find('.card-body__section')).toHaveLength(cardBody.length);
    });

    it('Should render the passed edit and delete Icons', () => {
        expect(component.containsMatchingElement(EditIcon)).toBeTruthy();
        expect(component.containsMatchingElement(DeleteIcon)).toBeTruthy();
    });
});
