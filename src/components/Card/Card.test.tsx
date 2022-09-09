import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import Card from '.';

// Mock functions
const editHandler = jest.fn();
const deleteHandler = jest.fn();

// Mock data for cardBody props
const cardBody = [{
    sectionHeading: 'Section Heading',
    data: [{
        icon: <i className='fa fa-edit' />,
        label: 'Label 1',
    }, {
        icon: <i className='fa fa-link' />,
        label: 'Label 2',
    }],
}];

// Mock Icons
const EditIcon = <i className='fa fa-edit' />;
const DeleteIcon = <i className='fa fa-delete' />;

// Mock Props
const cardProps = {
    cardHeader: 'Card Header',
    cardSubHeader: 'Card sub header',
    cardBody,
    onEdit: editHandler,
    onDelete: deleteHandler,
    editIcon: EditIcon,
    deleteIcon: DeleteIcon,
    className: 'card-custom-class',
}


describe('Card', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(() => {
        component = shallow(<Card {...cardProps} />);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed className prop', () => {
        expect(component.hasClass(cardProps.className)).toBeTruthy();
    })

    it('Should render the header correctly', () => {
        expect(component.find('.details-card__header-text').text().includes(cardProps.cardHeader)).toBeTruthy();
    })

    it('Should render the sub-header correctly', () => {
        expect(component.find('.details-card__sub-header').text().includes(cardProps.cardSubHeader)).toBeTruthy();
    })

    it('Should render the card body correctly', () => {
        expect(component.find('.card-body__section')).toHaveLength(cardBody.length);
    })

    it('Should render the passed edit and delete Icons', () => {
        expect(component.containsMatchingElement(EditIcon)).toBeTruthy();
        expect(component.containsMatchingElement(DeleteIcon)).toBeTruthy();
    });
})
